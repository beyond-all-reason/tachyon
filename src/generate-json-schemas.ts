/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "node:fs";
import path from "node:path";

import { TProperties, TSchema, TUnion, Type } from "@sinclair/typebox";
import { objectKeys } from "jaz-ts-utils";
import { pathToFileURL } from "url";

import { EndpointConfig } from "@/generator-helpers.js";
import { TachyonActor } from "@/type-helpers";

export type TachyonConfig = {
    commandConfigs: Record<`${string}/${string}`, CommandConfig>;
    compiledSchema: TUnion<TSchema[]>;
    schemaMeta: SchemaMeta;
};

type SchemaMeta = {
    actors: Record<TachyonActor, Record<"request" | "response" | "event", { send: string[]; receive: string[] }>>;
    serviceIds: Record<string, string[]>;
};

type CommandConfig = {
    commandId: `${string}/${string}`;
    schema: TSchema;
    config: EndpointConfig;
    type: "request" | "response" | "event";
};

const commandConfigs: TachyonConfig["commandConfigs"] = {};

export async function generateJsonSchemas(): Promise<TachyonConfig> {
    const serviceDirs = path.join(__dirname, "schema");
    const serviceHandlerDirs = await fs.promises.readdir(serviceDirs);

    for (const serviceId of serviceHandlerDirs) {
        if (serviceId.includes(".") || serviceId === "definitions") {
            continue;
        }
        const endpointDir = path.join(serviceDirs, serviceId);
        const endpointSchemaModules = await fs.promises.readdir(endpointDir, {
            withFileTypes: true,
        });

        for (const endpointSchemaPath of endpointSchemaModules) {
            if (endpointSchemaPath.name.endsWith(".md")) {
                continue;
            }
            const endpointId = path.parse(endpointSchemaPath.name).name;
            const endpoint = await import(pathToFileURL(path.join(endpointDir, endpointSchemaPath.name)).toString());
            const schemaConfig = endpoint.default as EndpointConfig;

            await fs.promises.mkdir(path.join("schema", serviceId, endpointId), {
                recursive: true,
            });

            if (!schemaConfig.source) {
                throw new Error(`Endpoint ${serviceId}/${endpointId} does not have a source field`);
            }

            if (!schemaConfig.target) {
                throw new Error(`Endpoint ${serviceId}/${endpointId} does not have a target field`);
            }

            if ("request" in schemaConfig && "event" in schemaConfig) {
                throw new Error(`Endpoint ${serviceId}/${endpointId} cannot have both a request and an event`);
            }

            if (!("request" in schemaConfig || "event" in schemaConfig)) {
                throw new Error(`Endpoint ${serviceId}/${endpointId} must have either a request or an event`);
            }

            if ("request" in schemaConfig && !("response" in schemaConfig)) {
                throw new Error(`Endpoint ${serviceId}/${endpointId} must have a response if it has a request`);
            }

            if ("response" in schemaConfig && !("request" in schemaConfig)) {
                throw new Error(`Endpoint ${serviceId}/${endpointId} must have a request if it has a response`);
            }

            const commandId = `${serviceId}/${endpointId}` as const;

            if ("request" in schemaConfig) {
                const props: TProperties = {
                    type: Type.Literal("request"),
                    messageId: Type.String(),
                    commandId: Type.Literal(commandId),
                };
                if (schemaConfig.request.data) {
                    props.data = schemaConfig.request.data;
                }
                const schema = Type.Object(props, {
                    $id: `${commandId}/request`,
                    scopes: schemaConfig.scopes,
                });
                replaceRefs(schema, "../../definitions/", ".json");
                const schemaStr = JSON.stringify(schema, null, 4);
                await fs.promises.writeFile(`schema/${serviceId}/${endpointId}/request.json`, schemaStr);
                commandConfigs[commandId] = { commandId, schema, config: schemaConfig, type: "request" };
            }

            if ("response" in schemaConfig && schemaConfig.response.length) {
                const schema = Type.Union(
                    schemaConfig.response.map((schema) => {
                        const props: TProperties = {
                            type: Type.Literal("response"),
                            messageId: Type.String(),
                            commandId: Type.Literal(commandId),
                            status: Type.Literal(schema.status),
                        };

                        if (schema.status == "failed") {
                            props.reason = Type.Literal(schema.reason);
                        }

                        if (schema.data) {
                            props.data = schema.data;
                        }

                        return Type.Object(props);
                    }),
                    {
                        $id: `${commandId}/response`,
                        scopes: schemaConfig.scopes,
                    }
                );
                replaceRefs(schema, "../../definitions/", ".json");
                const schemaStr = JSON.stringify(schema, null, 4);
                await fs.promises.writeFile(`schema/${serviceId}/${endpointId}/response.json`, schemaStr);
                commandConfigs[commandId] = { commandId, schema, config: schemaConfig, type: "response" };
            }

            if ("event" in schemaConfig) {
                const props: TProperties = {
                    type: Type.Literal("event"),
                    messageId: Type.String(),
                    commandId: Type.Literal(commandId),
                };
                if (schemaConfig.event.data) {
                    props.data = schemaConfig.event.data;
                }
                const schema = Type.Object(props, {
                    $id: `${commandId}/event`,
                    scopes: schemaConfig.scopes,
                });
                replaceRefs(schema, "../../definitions/", ".json");
                const schemaStr = JSON.stringify(schema, null, 4);
                await fs.promises.writeFile(`schema/${serviceId}/${endpointId}/event.json`, schemaStr);
                commandConfigs[commandId] = { commandId, schema, config: schemaConfig, type: "event" };
            }
        }
    }

    await fs.promises.mkdir("schema/definitions", { recursive: true });
    const definitionsMap: Record<string, TSchema> = {};
    const definitionsPath = path.join(__dirname, "schema", "definitions");
    for (const definitionFile of await fs.promises.readdir(definitionsPath)) {
        if (definitionFile.endsWith(".ts")) {
            const imports = await import(pathToFileURL(path.join(definitionsPath, definitionFile)).toString());
            const key = Object.keys(imports)[0];
            const schema = imports[key];
            if (!schema.$id) {
                throw new Error(`Definition schema does not have a $id field: ${definitionFile}`);
            }
            replaceRefs(schema, "../definitions/", ".json");
            const schemaStr = JSON.stringify(schema, null, 4);
            await fs.promises.writeFile(`schema/definitions/${schema.$id}.json`, schemaStr);
            definitionsMap[schema.$id] = schema;
        }
    }

    const schemaMeta: SchemaMeta = {
        actors: {
            server: {
                request: { send: [], receive: [] },
                response: { send: [], receive: [] },
                event: { send: [], receive: [] },
            },
            user: {
                request: { send: [], receive: [] },
                response: { send: [], receive: [] },
                event: { send: [], receive: [] },
            },
            autohost: {
                request: { send: [], receive: [] },
                response: { send: [], receive: [] },
                event: { send: [], receive: [] },
            },
        },
        serviceIds: {},
    };

    const individualSchemas: TSchema[] = [];

    objectKeys(commandConfigs).forEach((commandId) => {
        const commandConfig = commandConfigs[commandId];
        const [serviceId, endpointId] = commandId.split("/") as [string, string];

        if ("request" in commandConfig.config && "response" in commandConfig.config) {
            schemaMeta.actors[commandConfig.config.source].request.send.push(commandConfig.commandId);
            schemaMeta.actors[commandConfig.config.target].request.receive.push(commandConfig.commandId);
            schemaMeta.actors[commandConfig.config.source].response.receive.push(commandConfig.commandId);
            schemaMeta.actors[commandConfig.config.target].response.send.push(commandConfig.commandId);
        } else if ("event" in commandConfig.config) {
            schemaMeta.actors[commandConfig.config.source].event.send.push(commandConfig.commandId);
            schemaMeta.actors[commandConfig.config.target].event.receive.push(commandConfig.commandId);
        } else {
            throw new Error(`Endpoint ${commandConfig.commandId} has an invalid schema`);
        }

        if (!schemaMeta.serviceIds[serviceId]) {
            schemaMeta.serviceIds[serviceId] = [endpointId];
        } else {
            schemaMeta.serviceIds[serviceId].push(endpointId);
        }

        individualSchemas.push(commandConfig.schema);
    });

    const compiledSchema = Type.Union(individualSchemas);

    return { commandConfigs, compiledSchema, schemaMeta };
}

function replaceRefs(schema: TSchema, prefix: string, suffix: string) {
    for (const key in schema) {
        if (typeof schema[key] === "object") {
            replaceRefs(schema[key] as TSchema, prefix, suffix);
        }

        if (key === "$ref") {
            schema.$ref = `${prefix}${schema.$ref}${suffix}`;
        }
    }
}
