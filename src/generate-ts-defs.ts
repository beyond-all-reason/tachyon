import { TObject, Type } from "@sinclair/typebox";
import fs from "fs";
import { objectKeys } from "jaz-ts-utils";
import { compile } from "json-schema-to-typescript";

export async function generateTSDefs(fullSchema: TObject) {
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
}
