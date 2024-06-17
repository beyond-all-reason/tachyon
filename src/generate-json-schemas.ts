/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "node:fs";
import path from "node:path";

import { TProperties, TSchema, TUnion, Type } from "@sinclair/typebox";
import { objectKeys } from "jaz-ts-utils";
import { pathToFileURL } from "url";

import { FailedResponseSchema, SuccessResponseSchema } from "@/generator-helpers";
import { EndpointConfig } from "@/generator-helpers.js";
import { writeJsonSchema } from "@/json-schema-format";
import { TachyonActor, TachyonMessageType } from "@/tachyon-constants";
import { UnionEnum } from "@/union-enum";
const schemaBaseUri = "https://schema.beyondallreason.dev/tachyon";

export type TachyonConfig = {
    commandConfigs: Record<`${string}/${string}`, CommandConfig>;
    compiledSchema: TUnion<TSchema[]>;
    schemaMeta: SchemaMeta;
};

type SchemaMeta = {
    actors: Record<TachyonActor, Record<TachyonMessageType, { send: string[]; receive: string[] }>>;
    serviceIds: Record<string, string[]>;
};

export type CommandConfig = {
    commandId: `${string}/${string}`;
    config: EndpointConfig;
} & (
    | {
          type: "requestResponse";
          schema: {
              request: TSchema;
              response: TSchema;
          };
      }
    | {
          type: "event";
          schema: {
              event: TSchema;
          };
      }
);

const commandConfigs: TachyonConfig["commandConfigs"] = {};

function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

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
            const endpoint = await import(
                pathToFileURL(path.join(endpointDir, endpointSchemaPath.name)).toString()
            );
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
                throw new Error(
                    `Endpoint ${serviceId}/${endpointId} cannot have both a request and an event`
                );
            }

            if (!("request" in schemaConfig || "event" in schemaConfig)) {
                throw new Error(
                    `Endpoint ${serviceId}/${endpointId} must have either a request or an event`
                );
            }

            if ("request" in schemaConfig && !("response" in schemaConfig)) {
                throw new Error(
                    `Endpoint ${serviceId}/${endpointId} must have a response if it has a request`
                );
            }

            if ("response" in schemaConfig && !("request" in schemaConfig)) {
                throw new Error(
                    `Endpoint ${serviceId}/${endpointId} must have a request if it has a response`
                );
            }

            const commandId = `${serviceId}/${endpointId}` as const;
            const baseTypeName = `${capitalize(serviceId)}${capitalize(endpointId)}`;

            if ("request" in schemaConfig) {
                const props: TProperties = {
                    type: Type.Literal("request"),
                    messageId: Type.String(),
                    commandId: Type.Literal(commandId),
                };
                if (schemaConfig.request.data) {
                    props.data = schemaConfig.request.data;
                    props.data.title ??= baseTypeName + "RequestData";
                }
                const requestSchema = Type.Object(props, {
                    $schema: "http://json-schema.org/draft-07/schema#",
                    $id: `${schemaBaseUri}/${commandId}/request.json`,
                    title: baseTypeName + "Request",
                    tachyon: {
                        source: schemaConfig.source,
                        target: schemaConfig.target,
                        scopes: schemaConfig.scopes,
                    },
                });
                mapRefs(requestSchema, (ref) => `../../definitions/${ref}.json`);
                await writeJsonSchema(
                    `schema/${serviceId}/${endpointId}/request.json`,
                    requestSchema
                );

                const successResponses = schemaConfig.response.filter(
                    (schema) => schema.status == "success"
                ) as SuccessResponseSchema[]; // Cast won't be necessary in typescript 5.5
                const failedResponses = schemaConfig.response.filter(
                    (schema) => schema.status == "failed"
                ) as FailedResponseSchema[]; // Cast won't be necessary in typescript 5.5
                if (successResponses.length === 0) {
                    throw new Error(
                        `Endpoint ${serviceId}/${endpointId} does not have a success response`
                    );
                }
                if (failedResponses.length === 0) {
                    throw new Error(
                        `Endpoint ${serviceId}/${endpointId} does not have a failed response`
                    );
                }
                if (
                    successResponses.length > 1 &&
                    successResponses.filter((s) => !s.title).length > 1
                ) {
                    throw new Error(
                        `Endpoint ${serviceId}/${endpointId} has multiple success responses but not all have a title`
                    );
                }

                const responseSchema = Type.Union(
                    successResponses
                        .map((schema) => {
                            const props: TProperties = {
                                type: Type.Literal("response"),
                                messageId: Type.String(),
                                commandId: Type.Literal(commandId),
                                status: Type.Literal(schema.status),
                            };
                            const title = schema.title ?? baseTypeName + "OkResponse";
                            if (schema.data) {
                                props.data = schema.data;
                                props.data.title ??= title + "Data";
                            }
                            return Type.Object(props, { title });
                        })
                        .concat([
                            Type.Object(
                                {
                                    type: Type.Literal("response"),
                                    messageId: Type.String(),
                                    commandId: Type.Literal(commandId),
                                    status: Type.Literal("failed"),
                                    reason: UnionEnum(
                                        failedResponses.map((schema) => schema.reason)
                                    ),
                                },
                                { title: baseTypeName + "FailResponse" }
                            ),
                        ]),
                    {
                        $schema: "http://json-schema.org/draft-07/schema#",
                        $id: `${schemaBaseUri}/${commandId}/response.json`,
                        title: baseTypeName + "Response",
                        tachyon: {
                            source: schemaConfig.target,
                            target: schemaConfig.source,
                            scopes: schemaConfig.scopes,
                        },
                    }
                );
                mapRefs(responseSchema, (ref) => `../../definitions/${ref}.json`);
                await writeJsonSchema(
                    `schema/${serviceId}/${endpointId}/response.json`,
                    responseSchema
                );

                commandConfigs[commandId] = {
                    commandId,
                    schema: { request: requestSchema, response: responseSchema },
                    config: schemaConfig,
                    type: "requestResponse",
                };
            }

            if ("event" in schemaConfig) {
                const props: TProperties = {
                    type: Type.Literal("event"),
                    messageId: Type.String(),
                    commandId: Type.Literal(commandId),
                };
                if (schemaConfig.event.data) {
                    props.data = schemaConfig.event.data;
                    props.data.title ??= baseTypeName + "EventData";
                }
                const eventSchema = Type.Object(props, {
                    $schema: "http://json-schema.org/draft-07/schema#",
                    $id: `${schemaBaseUri}/${commandId}/event.json`,
                    title: baseTypeName + "Event",
                    tachyon: {
                        source: schemaConfig.source,
                        target: schemaConfig.target,
                        scopes: schemaConfig.scopes,
                    },
                });
                mapRefs(eventSchema, (ref) => `../../definitions/${ref}.json`);
                await writeJsonSchema(`schema/${serviceId}/${endpointId}/event.json`, eventSchema);

                commandConfigs[commandId] = {
                    commandId,
                    schema: { event: eventSchema },
                    config: schemaConfig,
                    type: "event",
                };
            }
        }
    }

    await fs.promises.mkdir("schema/definitions", { recursive: true });
    const definitionsMap: Record<string, TSchema> = {};
    const definitionsPath = path.join(__dirname, "schema", "definitions");
    for (const definitionFile of await fs.promises.readdir(definitionsPath)) {
        if (!definitionFile.endsWith(".ts")) {
            continue;
        }
        const name = path.parse(definitionFile).name;
        const imports = await import(
            pathToFileURL(path.join(definitionsPath, definitionFile)).toString()
        );
        const key = Object.keys(imports)[0];
        if (key !== name) {
            throw new Error(
                `Definition schema does not have the same name as the file: ${definitionFile}`
            );
        }
        const schema = imports[key];
        if (!schema.$id) {
            throw new Error(`Definition schema does not have a $id field: ${definitionFile}`);
        }
        if (schema.$id !== name) {
            throw new Error(`Definition schema $id does not match the name: ${definitionFile}`);
        }
        // We need to have ternary in mapper below because the schema might have been modified by us already.
        mapRefs(schema, (ref) => `../definitions/${ref}.json`);
        definitionsMap[name] = schema;

        // We have to clone the schema because we modify it in place and it impacts later lookups
        const schemaClone = { ...schema };
        schemaClone.$id = `${schemaBaseUri}/definitions/${name}.json`;
        schemaClone.title ??= capitalize(name);
        await writeJsonSchema(`schema/definitions/${name}.json`, schemaClone);
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

        if (commandConfig.type === "requestResponse") {
            schemaMeta.actors[commandConfig.config.source].request.send.push(
                commandConfig.commandId
            );
            schemaMeta.actors[commandConfig.config.target].request.receive.push(
                commandConfig.commandId
            );
            schemaMeta.actors[commandConfig.config.source].response.receive.push(
                commandConfig.commandId
            );
            schemaMeta.actors[commandConfig.config.target].response.send.push(
                commandConfig.commandId
            );

            individualSchemas.push(commandConfig.schema.request);
            individualSchemas.push(commandConfig.schema.response);
        } else if ("event" in commandConfig.config) {
            schemaMeta.actors[commandConfig.config.source].event.send.push(commandConfig.commandId);
            schemaMeta.actors[commandConfig.config.target].event.receive.push(
                commandConfig.commandId
            );

            individualSchemas.push(commandConfig.schema.event);
        } else {
            throw new Error(`Endpoint ${commandConfig.commandId} has an invalid schema`);
        }

        if (!schemaMeta.serviceIds[serviceId]) {
            schemaMeta.serviceIds[serviceId] = [endpointId];
        } else {
            schemaMeta.serviceIds[serviceId].push(endpointId);
        }
    });

    // Remove all $id and $schema fields in the sub-schemas of the combined schema
    for (const def of Object.values(definitionsMap)) {
        delete def.$id;
        delete def.$schema;
    }
    for (const s of individualSchemas) {
        delete s.$id;
        delete s.$schema;
    }

    const compiledSchema = Type.Union(individualSchemas, {
        $schema: "http://json-schema.org/draft-07/schema#",
        $id: `${schemaBaseUri}/compiled.json`,
        title: "TachyonCommand",
        definitions: definitionsMap,
    });
    mapRefs(compiledSchema, (ref) =>
        ref.replace(/.*\/definitions\/(.*)\.json/, "#/definitions/$1")
    );
    await writeJsonSchema("schema/compiled.json", compiledSchema);

    return { commandConfigs, compiledSchema, schemaMeta };
}

function mapRefs(schema: TSchema, f: (ref: string) => string) {
    for (const key in schema) {
        if (typeof schema[key] === "object") {
            mapRefs(schema[key] as TSchema, f);
        }
        if (key === "$ref") {
            schema.$ref = f(schema.$ref);
        }
    }
}
