import fs from "node:fs/promises";

import { compileFromFile } from "json-schema-to-typescript";

export async function generateTSDefs() {
    let typings = "\n";

    // generate d.ts
    typings += await compileFromFile("schema/compiled.json", {
        additionalProperties: false,
        bannerComment: "",
        style: {
            bracketSpacing: true,
            tabWidth: 4,
            semi: true,
        },
    });

    await fs.writeFile(`dist/types.ts`, typings);
}
