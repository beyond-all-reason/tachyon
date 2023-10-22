import { TProperties, Type } from "@sinclair/typebox";
import fs from "fs";
import jsf from "json-schema-faker";
import path from "path";
import { EndpointConfig, FailedResponseSchema, SuccessResponseSchema } from "./helpers";

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
                    command: Type.Literal(`${serviceId}/${endpointId}/request`),
                };
                if (endpointSchema.request.data) {
                    props.data = endpointSchema.request.data;
                }
                const schema = Type.Object(props, {
                    $id: `${serviceId}/${endpointId}/request`,
                    requiresLogin: Boolean(endpointSchema.requiresLogin),
                    requiresRole: Boolean(endpointSchema.requiresRole),
                });
                const schemaStr = JSON.stringify(schema, null, 4);
                await fs.promises.writeFile(
                    `dist/${serviceId}/${endpointId}/request.json`,
                    schemaStr
                );
                fullSchemaProps[serviceId][endpointId].request = schema;
            }
            if ("response" in endpointSchema && endpointSchema.response.length) {
                const successResponses = endpointSchema.response
                    .filter((res): res is SuccessResponseSchema => res.status === "success")
                    .map((res) => {
                        const props: TProperties = {
                            command: Type.Literal(`${serviceId}/${endpointId}/response`),
                            status: Type.Literal(res.status),
                        };
                        if (res.data) {
                            props.data = res.data;
                        }
                        return Type.Object(props);
                    });
                const schema = Type.Union(
                    [
                        ...successResponses,
                        Type.Object({
                            command: Type.Literal(`${serviceId}/${endpointId}/response`),
                            status: Type.Literal("failed"),
                            reason: Type.Union(
                                endpointSchema.response
                                    .filter(
                                        (res): res is FailedResponseSchema =>
                                            res.status === "failed"
                                    )
                                    .map((res) => {
                                        return Type.Literal(res.reason);
                                    })
                            ),
                        }),
                    ],
                    {
                        $id: `${serviceId}/${endpointId}/response`,
                        requiresLogin: Boolean(endpointSchema.requiresLogin),
                        requiresRole: Boolean(endpointSchema.requiresRole),
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
    compiledSchema = Type.Object(compiledSchema);

    return { individualSchemas, compiledSchema, ids };
}
