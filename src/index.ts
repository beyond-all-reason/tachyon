import { TObject, TProperties, Type, TypeGuard } from "@sinclair/typebox";
import fs from "fs";
import { objectKeys } from "jaz-ts-utils";
import { compile } from "json-schema-to-typescript";
import path from "path";

import { generateMarkdown } from "@/generate-markdown";
import { EndpointConfig, FailedResponseSchema, SuccessResponseSchema } from "@/helpers";

(async () => {
    const fullSchemaProps: Record<string, Record<string, TProperties>> = {};
    const tachyonSchema: Record<string, Record<string, EndpointConfig>> = {};

    const serviceDirs = path.join(__dirname, "schema");
    const serviceHandlerDirs = await fs.promises.readdir(serviceDirs);
    for (const serviceId of serviceHandlerDirs) {
        if (serviceId.includes(".")) {
            continue;
        }
        const endpointDir = path.join(serviceDirs, serviceId);
        const endpointSchemaModules = await fs.promises.readdir(endpointDir, {
            withFileTypes: false,
        });

        const serviceSchema: Record<string, EndpointConfig> = {};
        fullSchemaProps[serviceId] = {};

        for (const endpointSchemaPath of endpointSchemaModules) {
            const endpointId = path.parse(endpointSchemaPath).name;
            const endpoint = await import(path.join(endpointDir, endpointSchemaPath));
            const endpointSchema = endpoint.default as EndpointConfig;
            fullSchemaProps[serviceId][endpointId] = {};
            await fs.promises.mkdir(path.join("dist", serviceId, endpointId), { recursive: true });

            if ("request" in endpointSchema) {
                const props: TProperties = {
                    command: Type.Literal(`${serviceId}/${endpointId}/request`),
                };
                if (TypeGuard.TObject(endpointSchema.request) || TypeGuard.TIntersect(endpointSchema.request) || TypeGuard.TUnion(endpointSchema.request)) {
                    props.data = endpointSchema.request;
                }
                const schema = Type.Object(props, {
                    $id: `${serviceId}/${endpointId}/request`,
                });
                const schemaStr = JSON.stringify(schema, null, 4);
                await fs.promises.writeFile(`dist/${serviceId}/${endpointId}/request.json`, schemaStr);
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
                                    .filter((res): res is FailedResponseSchema => res.status === "failed")
                                    .map((res) => {
                                        return Type.Literal(res.reason);
                                    })
                            ),
                        }),
                    ],
                    {
                        $id: `${serviceId}/${endpointId}/response`,
                    }
                );
                const schemaStr = JSON.stringify(schema, null, 4);
                await fs.promises.writeFile(`dist/${serviceId}/${endpointId}/response.json`, schemaStr);
                fullSchemaProps[serviceId][endpointId].response = schema;
            }
            serviceSchema[endpointId] = endpointSchema;
        }
        tachyonSchema[serviceId] = serviceSchema;
    }

    let fullSchema: any = {};
    for (const serviceId in fullSchemaProps) {
        fullSchema[serviceId] = {};
        const serviceSchema = fullSchemaProps[serviceId];
        for (const endpointId in serviceSchema) {
            const endpointSchema = serviceSchema[endpointId];
            fullSchema[serviceId][endpointId] = Type.Object(endpointSchema);
        }
        fullSchema[serviceId] = Type.Object(fullSchema[serviceId]);
    }
    fullSchema = Type.Object(fullSchema);

    for (const serviceId in tachyonSchema) {
        const serviceSchema = tachyonSchema[serviceId] as Record<string, EndpointConfig>;

        const orderedEndpointIds = Object.keys(serviceSchema).sort((a, b) => {
            const orderA = serviceSchema[a]?.order ?? Infinity;
            const orderB = serviceSchema[b]?.order ?? Infinity;

            return orderA - orderB;
        });

        const orderedEndpoints = {} as Record<string, TObject>;
        for (const id of orderedEndpointIds) {
            orderedEndpoints[id] = fullSchema.properties[serviceId].properties[id];
        }

        let markdown = `# ${serviceId.toString()}\n\n`;
        for (const endpointId of orderedEndpointIds) {
            markdown += `- [${endpointId}](#${endpointId})\n`;
        }
        markdown += await generateMarkdown(orderedEndpoints, serviceId);
        await fs.promises.mkdir(`docs`, { recursive: true });
        await fs.promises.writeFile(`docs/${serviceId.toString()}.md`, markdown);
    }

    let typings = await compile(fullSchema, "Tachyon", {
        additionalProperties: false,
        bannerComment: `/**
        * This file was automatically generated, do not edit it manually.
        * Instead modify the .ts files in src/schema and do npm run build
        */`,
        style: {
            bracketSpacing: true,
            tabWidth: 4,
            semi: true,
        },
    });
    const types = await import("./schema/types");
    for (const key of objectKeys(types)) {
        const thing = types[key];
        const fullType = Type.Strict(thing as any);
        const type = await compile(fullType, key, {
            bannerComment: "",
            additionalProperties: false,
            style: {
                bracketSpacing: true,
                tabWidth: 4,
                semi: true,
            },
        });
        typings += type + "\n";
    }

    typings += `
export type ServiceId = keyof Tachyon;

export type EndpointId = keyof Tachyon[ServiceId];

export type RequestEndpointId<S extends ServiceId> = keyof {
    [key in keyof Tachyon[S] as Tachyon[S][key] extends { request: any } ? key : never]: Tachyon[S][key];
};

export type ResponseEndpointId<S extends ServiceId> = keyof {
    [key in keyof Tachyon[S] as Tachyon[S][key] extends { response: any } ? key : never]: Tachyon[S][key];
};

export type RequestType<S extends ServiceId, E extends RequestEndpointId<S>> = Tachyon[S][E] extends { request: infer Req } ? Req : object;

export type ResponseType<S extends ServiceId, E extends ResponseEndpointId<S>> = Tachyon[S][E] extends { response: infer Res } ? Res : object;

export type RequestData<S extends ServiceId, E extends RequestEndpointId<S>> = Tachyon[S][E] extends { request: { data: infer Data } } ? Data : never;

export type ResponseData<S extends ServiceId, E extends ResponseEndpointId<S>> = Tachyon[S][E] extends { response: { data: infer Data } } ? Data : never;

export type RemoveField<T, K extends string> = T extends { [P in K]: any } ? Omit<T, K> : never;

export type GetCommands<S extends ServiceId, E extends keyof Tachyon[S]> = Tachyon[S][E];
`;
    await fs.promises.writeFile(`dist/index.d.ts`, typings);
})();
