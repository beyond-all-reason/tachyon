import { TObject, Type } from "@sinclair/typebox";
import fs from "fs";
import { objectKeys, titleCase } from "jaz-ts-utils";
import { compile } from "json-schema-to-typescript";

export async function generateTSDefs(fullSchema: TObject) {
    let typings = "\n";

    typings += await compile(fullSchema, "Tachyon", {
        additionalProperties: false,
        bannerComment: "",
        style: {
            bracketSpacing: true,
            tabWidth: 4,
            semi: true,
        },
    });

    const types = await import("./schema/types.js");
    for (const key of objectKeys(types)) {
        const thing = types[key];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fullType = Type.Strict(thing as any);
        const type = await compile(fullType, `Tachyon${titleCase(key)}`, {
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

    await fs.promises.appendFile(`dist/index.d.ts`, typings);
    await fs.promises.appendFile(`dist/index.d.mts`, typings);
}
