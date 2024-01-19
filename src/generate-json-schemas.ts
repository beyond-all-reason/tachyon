/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProperties, Type } from "@sinclair/typebox";
import fs from "fs";
import jsf from "json-schema-faker";
import path from "path";

import { EndpointConfig } from "@/generator-helpers";

jsf.option("useExamplesValue", true);
jsf.option("random", () => 0.1234);

export async function generateJsonSchemas() {
    const fullSchemaProps: Record<string, Record<string, TProperties>> = {};
    const individualSchemas: Record<string, Record<string, EndpointConfig>> = {};

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
            const endpoint = await import(path.join(endpointDir, endpointSchemaPath.name));
            const endpointSchema = endpoint.default as EndpointConfig;
            fullSchemaProps[serviceId][endpointId] = {};
            await fs.promises.mkdir(path.join("dist", serviceId, endpointId), {
                recursive: true,
            });

            if ("request" in endpointSchema) {
                const props: TProperties = {
                    messageId: Type.String(),
                    commandId: Type.Literal(`${serviceId}/${endpointId}/request`),
                };
                if (endpointSchema.request.data) {
                    props.data = endpointSchema.request.data;
                }
                const schema = Type.Object(props, {
                    $id: `${serviceId}/${endpointId}/request`,
                    roles: endpointSchema.roles,
                });
                const schemaStr = JSON.stringify(schema, null, 4);
                await fs.promises.writeFile(
                    `dist/${serviceId}/${endpointId}/request.json`,
                    schemaStr
                );
                fullSchemaProps[serviceId][endpointId].request = schema;
            }
            if ("response" in endpointSchema && endpointSchema.response.length) {
                const schema = Type.Union(
                    endpointSchema.response.map((schema) => {
                        const props: TProperties = {
                            messageId: Type.String(),
                            commandId: Type.Literal(`${serviceId}/${endpointId}/response`),
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
                        $id: `${serviceId}/${endpointId}/response`,
                        roles: endpointSchema.roles,
                    }
                );
                const schemaStr = JSON.stringify(schema, null, 4);
                await fs.promises.writeFile(
                    `dist/${serviceId}/${endpointId}/response.json`,
                    schemaStr
                );
                fullSchemaProps[serviceId][endpointId].response = schema;
            }
            serviceSchema[endpointId] = endpointSchema;
        }
        individualSchemas[serviceId] = serviceSchema;
    }

    const ids: Record<string, Record<string, string[]>> = {};
    let compiledSchema: any = {};
    for (const serviceId in fullSchemaProps) {
        compiledSchema[serviceId] = {};
        ids[serviceId] = {};
        const serviceSchema = fullSchemaProps[serviceId];
        for (const endpointId in serviceSchema) {
            const endpointSchema = serviceSchema[endpointId];
            ids[serviceId][endpointId] = Object.keys(endpointSchema);
            compiledSchema[serviceId][endpointId] = Type.Object(endpointSchema, {
                description: individualSchemas[serviceId][endpointId].description,
            });
        }
        compiledSchema[serviceId] = Type.Object(compiledSchema[serviceId]);
    }

    const sharedCommandSchema = Type.Object({
        commandId: Type.String(),
        messageId: Type.String(),
    });

    const requestCommandSchema = Type.Composite([
        sharedCommandSchema,
        Type.Object({
            data: Type.Optional(Type.Unknown()),
        }),
    ]);

    const responseCommandSchema = Type.Union([
        Type.Composite([
            sharedCommandSchema,
            Type.Object({
                status: Type.Literal("success"),
                data: Type.Optional(Type.Unknown()),
            }),
        ]),
        Type.Composite([
            sharedCommandSchema,
            Type.Object({
                status: Type.Literal("failed"),
                reason: Type.String(),
            }),
        ]),
    ]);

    compiledSchema = Type.Object(compiledSchema, {
        additionalProperties: Type.Record(
            Type.String(),
            Type.Union([
                Type.Object({
                    request: requestCommandSchema,
                    response: responseCommandSchema,
                }),
                Type.Object({
                    response: responseCommandSchema,
                }),
            ])
        ),
    });

    return { individualSchemas, compiledSchema, ids };
}
