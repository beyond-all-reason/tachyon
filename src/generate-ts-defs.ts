import fs from "fs";
import { compile } from "json-schema-to-typescript";

import { TachyonConfig } from "@/generate-json-schemas";

export async function generateTSDefs(tachyonConfig: TachyonConfig) {
    let typings = "\n";

    //const compiledSchema = JSON.parse(JSON.stringify(tachyonConfig.compiledSchema).replaceAll("../../definitions", "./schema/definitions"));

    // generate d.ts
    typings += await compile(tachyonConfig.compiledSchema, "TachyonCommand", {
        additionalProperties: false,
        bannerComment: "",
        style: {
            bracketSpacing: true,
            tabWidth: 4,
            semi: true,
        },
    });

    // typings += await compile(unionSchema, "TachyonCommand", {
    //     additionalProperties: false,
    //     bannerComment: "",
    //     style: {
    //         bracketSpacing: true,
    //         tabWidth: 4,
    //         semi: true,
    //     },
    // });

    // const types = await import("./schema/definitions.js");
    // for (const key of objectKeys(types)) {
    //     const thing = types[key];
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     const fullType = Type.Strict(thing as any);
    //     const type = await compile(fullType, `Tachyon${titleCase(key)}`, {
    //         bannerComment: "",
    //         additionalProperties: false,
    //         style: {
    //             bracketSpacing: true,
    //             tabWidth: 4,
    //             semi: true,
    //         },
    //     });
    //     typings += type + "\n";
    // }

    await fs.promises.appendFile(`dist/index.d.ts`, typings);
    await fs.promises.appendFile(`dist/index.d.mts`, typings);
}
