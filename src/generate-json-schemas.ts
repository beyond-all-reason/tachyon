/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "node:fs";
import path from "node:path";

import { TProperties, TSchema, Type } from "@sinclair/typebox";
import { pathToFileURL } from "url";

import { EndpointConfig } from "@/generator-helpers.js";
import * as definitions from "@/schema/definitions";
import { TachyonActor } from "@/type-helpers";

const definitionsMap: Record<string, TSchema> = {};

for (const key in definitions) {
    definitionsMap[key] = definitions[key as keyof typeof definitions];
}

export type SchemaMeta = {
    actors: Record<TachyonActor, Record<"request" | "response" | "event", { send: string[]; receive: string[] }>>;
    serviceIds: Record<string, string[]>;
};

export async function generateJsonSchemas() {
    const fullSchemaProps: Record<string, Record<string, TProperties>> = {};
    const individualSchemas: Record<string, Record<string, EndpointConfig>> = {};
    const unionSchemas: TSchema[] = [];

    const serviceDirs = path.join(__dirname, "schema");
    const serviceHandlerDirs = await fs.promises.readdir(serviceDirs);

    for (const serviceId of serviceHandlerDirs) {
        if (serviceId.includes(".")) {
            continue;
        }
        const endpointDir = path.join(serviceDirs, serviceId);
        const endpointSchemaModules = await fs.promises.readdir(endpointDir, {
            withFileTypes: true,
        });

        const serviceSchema: Record<string, EndpointConfig> = {};
        fullSchemaProps[serviceId] = {};

        for (const endpointSchemaPath of endpointSchemaModules) {
            if (endpointSchemaPath.name.endsWith(".md")) {
                continue;
            }
            const endpointId = path.parse(endpointSchemaPath.name).name;
            const endpoint = await import(pathToFileURL(path.join(endpointDir, endpointSchemaPath.name)).toString());
            const endpointSchema = endpoint.default as EndpointConfig;
            fullSchemaProps[serviceId][endpointId] = {};
            await fs.promises.mkdir(path.join("schema", serviceId, endpointId), {
                recursive: true,
            });

            if (!endpointSchema.source) {
                throw new Error(`Endpoint ${serviceId}/${endpointId} does not have a source field`);
            }

            if (!endpointSchema.target) {
                throw new Error(`Endpoint ${serviceId}/${endpointId} does not have a target field`);
            }

            if ("request" in endpointSchema && "event" in endpointSchema) {
                throw new Error(`Endpoint ${serviceId}/${endpointId} cannot have both a request and an event`);
            }

            if (!("request" in endpointSchema || "event" in endpointSchema)) {
                throw new Error(`Endpoint ${serviceId}/${endpointId} must have either a request or an event`);
            }

            if ("request" in endpointSchema && !("response" in endpointSchema)) {
                throw new Error(`Endpoint ${serviceId}/${endpointId} must have a response if it has a request`);
            }

            if ("response" in endpointSchema && !("request" in endpointSchema)) {
                throw new Error(`Endpoint ${serviceId}/${endpointId} must have a request if it has a response`);
            }

            if ("request" in endpointSchema) {
                const props: TProperties = {
                    type: Type.Literal("request"),
                    messageId: Type.String(),
                    commandId: Type.Literal(`${serviceId}/${endpointId}`),
                };
                if (endpointSchema.request.data) {
                    props.data = endpointSchema.request.data;
                }
                const schema = Type.Object(props, {
                    $id: `${serviceId}.${endpointId}.request`,
                    scopes: endpointSchema.scopes,
                });
                const schemaStr = JSON.stringify(schema, null, 4);
                await fs.promises.writeFile(`schema/${serviceId}/${endpointId}/request.json`, schemaStr);
                fullSchemaProps[serviceId][endpointId].request = schema;
                unionSchemas.push(schema);
            }

            if ("response" in endpointSchema && endpointSchema.response.length) {
                const schema = Type.Union(
                    endpointSchema.response.map((schema) => {
                        const props: TProperties = {
                            type: Type.Literal("response"),
                            messageId: Type.String(),
                            commandId: Type.Literal(`${serviceId}/${endpointId}`),
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
                        $id: `${serviceId}.${endpointId}.response`,
                        scopes: endpointSchema.scopes,
                    }
                );
                const schemaStr = JSON.stringify(schema, null, 4);
                await fs.promises.writeFile(`schema/${serviceId}/${endpointId}/response.json`, schemaStr);
                fullSchemaProps[serviceId][endpointId].response = schema;
                unionSchemas.push(schema);
            }

            if ("event" in endpointSchema) {
                const props: TProperties = {
                    type: Type.Literal("event"),
                    messageId: Type.String(),
                    commandId: Type.Literal(`${serviceId}/${endpointId}`),
                };
                if (endpointSchema.event.data) {
                    props.data = endpointSchema.event.data;
                }
                const schema = Type.Object(props, {
                    $id: `${serviceId}.${endpointId}.event`,
                    scopes: endpointSchema.scopes,
                });
                const schemaStr = JSON.stringify(schema, null, 4);
                await fs.promises.writeFile(`schema/${serviceId}/${endpointId}/event.json`, schemaStr);
                fullSchemaProps[serviceId][endpointId].event = schema;
                unionSchemas.push(schema);
            }

            serviceSchema[endpointId] = endpointSchema;
        }
        individualSchemas[serviceId] = serviceSchema;
    }

    // defs
    await fs.promises.mkdir("schema/definitions", { recursive: true });

    for (const id in definitionsMap) {
        const schema = definitionsMap[id];
        const schemaStr = JSON.stringify(schema, null, 4);
        await fs.promises.writeFile(`schema/definitions/${schema.$id}.json`, schemaStr);
    }

    // single combined schema
    let unionSchema = Type.Union(unionSchemas, {
        definitions: definitionsMap,
    });

    unionSchema = JSON.parse(JSON.stringify(unionSchema, null, 4).replace(/"\$ref":\s*"([^"]+)"/g, `"$ref": "#/definitions/$1"`));

    // schema meta
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
    let compiledSchema: any = {};
    for (const serviceId in fullSchemaProps) {
        compiledSchema[serviceId] = {};
        schemaMeta.serviceIds[serviceId] = Object.keys(fullSchemaProps[serviceId]);
        const serviceSchema = fullSchemaProps[serviceId];
        for (const endpointId in serviceSchema) {
            const endpointSchema = serviceSchema[endpointId];
            const endpointConfig = individualSchemas[serviceId][endpointId];

            if ("request" in endpointSchema && "response" in endpointSchema) {
                schemaMeta.actors[endpointConfig.source].request.send.push(`${serviceId}/${endpointId}`);
                schemaMeta.actors[endpointConfig.target].request.receive.push(`${serviceId}/${endpointId}`);
                schemaMeta.actors[endpointConfig.source].response.receive.push(`${serviceId}/${endpointId}`);
                schemaMeta.actors[endpointConfig.target].response.send.push(`${serviceId}/${endpointId}`);
            } else if ("event" in endpointSchema) {
                schemaMeta.actors[endpointConfig.source].event.send.push(`${serviceId}/${endpointId}`);
                schemaMeta.actors[endpointConfig.target].event.receive.push(`${serviceId}/${endpointId}`);
            } else {
                throw new Error(`Endpoint ${serviceId}/${endpointId} has an invalid schema`);
            }

            const compiledEndpoint = Type.Object(endpointSchema, {
                description: individualSchemas[serviceId][endpointId].description,
            });
            compiledSchema[serviceId][endpointId] = compiledEndpoint;
        }
        compiledSchema[serviceId] = Type.Object(compiledSchema[serviceId]);
    }

    compiledSchema = Type.Object(compiledSchema);

    return { individualSchemas, compiledSchema, unionSchema, schemaMeta };
}
