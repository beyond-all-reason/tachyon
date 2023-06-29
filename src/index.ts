import { Type } from "@sinclair/typebox";
import fs from "fs";
import { objectKeys } from "jaz-ts-utils";
import { compile } from "json-schema-to-typescript";
import path from "path";

import { generateMarkdown } from "@/generate-markdown";
import { EndpointSchema } from "@/helpers";

(async () => {
    const tachyonSchema: Record<string, Record<string, EndpointSchema>> = {};
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
        const serviceSchema: Record<string, EndpointSchema> = {};
        for (const endpointSchemaPath of endpointSchemaModules) {
            const endpointId = path.parse(endpointSchemaPath).name;
            const endpoint = await import(path.join(endpointDir, endpointSchemaPath));
            const endpointSchema = endpoint.default as EndpointSchema;
            await fs.promises.mkdir(path.join("dist", serviceId, endpointId), { recursive: true });
            if ("request" in endpointSchema) {
                if (endpointSchema.request.anyOf) {
                    for (const obj of endpointSchema.request.anyOf) {
                        obj.properties.command.const = `${serviceId}/${endpointId}/request`;
                    }
                } else {
                    endpointSchema.request.properties.command.const = `${serviceId}/${endpointId}/request`;
                    console.log(endpointSchema.request);
                }
                const schema = Type.Strict(endpointSchema.request);
                schema.$id = `${serviceId}/${endpointId}/request`;
                const schemaStr = JSON.stringify(schema, null, 4);
                await fs.promises.writeFile(`dist/${serviceId}/${endpointId}/request.json`, schemaStr);
            }
            if ("response" in endpointSchema) {
                if (endpointSchema.response.anyOf) {
                    for (const obj of endpointSchema.response.anyOf) {
                        obj.properties.command.const = `${serviceId}/${endpointId}/response`;
                    }
                } else {
                    endpointSchema.response.properties.command.const = `${serviceId}/${endpointId}/response`;
                }
                const schema = Type.Strict(endpointSchema.response);
                schema.$id = `${serviceId}/${endpointId}/response`;
                const schemaStr = JSON.stringify(schema, null, 4);
                await fs.promises.writeFile(`dist/${serviceId}/${endpointId}/response.json`, schemaStr);
            }
            serviceSchema[endpointId] = endpointSchema;
        }
        tachyonSchema[serviceId] = serviceSchema;
    }

    for (const serviceId in tachyonSchema) {
        const serviceSchema = tachyonSchema[serviceId] as Record<string, EndpointSchema>;

        const orderedEndpointIds = Object.keys(serviceSchema).sort((a, b) => {
            const orderA = serviceSchema[a]?.order ?? Infinity;
            const orderB = serviceSchema[b]?.order ?? Infinity;

            return orderA - orderB;
        });

        const orderedEndpoints = {} as Record<string, EndpointSchema>;
        for (const id of orderedEndpointIds) {
            orderedEndpoints[id] = serviceSchema[id];
        }

        let markdown = `# ${serviceId.toString()}\n\n`;
        markdown += await generateMarkdown(orderedEndpoints, serviceId);
        await fs.promises.mkdir(`docs`, { recursive: true });
        await fs.promises.writeFile(`docs/${serviceId.toString()}.md`, markdown);
    }

    let fullSchema: any = {};
    for (const serviceId in tachyonSchema) {
        const serviceSchema = tachyonSchema[serviceId];
        const serviceTSchema: any = {};
        for (const endpointId in serviceSchema) {
            const { order, ...endpointSchema } = serviceSchema[endpointId];
            serviceTSchema[endpointId] = Type.Object(endpointSchema);
        }
        fullSchema[serviceId] = Type.Object(serviceTSchema);
    }
    fullSchema = Type.Object(fullSchema);

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

    // const jsonSchemaStaticDocs = new JsonSchemaStaticDocs({
    //     inputPath: path.join(__dirname, "../dist").replace(/\\/g, "/"),
    //     inputFileGlob: "**/*.{yml,json}",
    //     outputPath: path.join(__dirname, "../docs").replace(/\\/g, "/"),
    //     ajvOptions: {
    //         allowUnionTypes: true,
    //     },
    // });
    // await jsonSchemaStaticDocs.generate();
})();
