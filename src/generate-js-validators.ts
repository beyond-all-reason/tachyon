/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from "node:fs";
import path from "node:path";

import Ajv from "ajv";
import standaloneCode from "ajv/dist/standalone";
import addFormats from "ajv-formats";
import { titleCase } from "jaz-ts-utils";

export async function generateValidators() {
    const schemaMap: Record<string, string> = {};

    // for (const schema of tachyonConfig.compiledSchema.anyOf) {
    //     const properties = schema.properties ?? schema.anyOf[0].properties;
    //     const [serviceId, endpointId] = properties.commandId.const.split("/");
    //     const commandType = properties.type.const;
    //     schemaMap[`${serviceId}_${endpointId}_${commandType}`] = `${serviceId}/${endpointId}/${commandType}`;
    // }

    //const schemas = [...tachyonConfig.compiledSchema.anyOf, { definitions: tachyonConfig.compiledSchema.definitions }];

    const schemas = [];
    for (const file of await fs.promises.readdir("schema", { recursive: true })) {
        if (file === "compiled.json" || !file.endsWith(".json")) {
            continue;
        }
        const schema = JSON.parse(
            await fs.promises.readFile(path.join("schema", file), { encoding: "utf-8" })
        );
        schemas.push(schema);

        if (!file.startsWith("definitions")) {
            const properties = schema.properties ?? schema.anyOf[0].properties;
            const [serviceId, endpointId] = properties.commandId.const.split("/");
            const commandType = properties.type.const;
            schemaMap[`${serviceId}_${endpointId}_${commandType}`] = schema.$id;
        }
    }

    // esm
    process.stdout.write("Generating ESM validators...");
    const ajvEsm = new Ajv({
        schemas: schemas,
        code: {
            source: true,
            esm: true,
        },
        keywords: ["scopes"],
    });
    addFormats(ajvEsm);
    let moduleCode = `"use strict"
function ucs2length(str) {
    const len = str.length;
    let length = 0;
    let pos = 0;
    let value;
    while (pos < len) {
        length++;
        value = str.charCodeAt(pos++);
        if (value >= 0xd800 && value <= 0xdbff && pos < len) {
            // high surrogate, and there is a next character
            value = str.charCodeAt(pos);
            if ((value & 0xfc00) === 0xdc00)
                pos++; // low surrogate
        }
    }
    return length;
}
`;
    moduleCode += standaloneCode(ajvEsm, schemaMap);
    moduleCode = moduleCode.replaceAll(
        'require("ajv/dist/runtime/ucs2length").default',
        "ucs2length"
    );
    moduleCode = moduleCode.replaceAll('require("ajv-formats/dist/formats").', "");
    await fs.promises.writeFile("./dist/validators.mjs", moduleCode);
    process.stdout.write("✔️\n");

    // cjs
    process.stdout.write("Generating CJS validators...");
    const ajvCjs = new Ajv({
        schemas: schemas,
        code: {
            source: true,
            esm: false,
        },
        keywords: ["scopes"],
    });
    addFormats(ajvCjs);
    const moduleCodeCjs = standaloneCode(ajvCjs, schemaMap);
    await fs.promises.writeFile("./dist/validators.js", moduleCodeCjs);
    process.stdout.write("✔️\n");

    // types
    process.stdout.write("Generating validator types...");
    const imports: string[] = [];
    let declarations = "";
    for (const key in schemaMap) {
        const schemaType = key
            .split("_")
            .map((id) => titleCase(id))
            .join("");
        imports.push(schemaType);
        declarations += `declare const ${key}: ValidateFunction<${schemaType}>;\n`;
    }
    let types = "";
    types += `import type { ValidateFunction } from "ajv"\n`;
    types += `import { ${imports.join(", ")} } from "..";\n\n`;
    types += declarations;
    types += `\nexport { ${Object.keys(schemaMap).join(", ")} };`;

    await fs.promises.writeFile("./dist/validators.d.ts", types);
    await fs.promises.writeFile("./dist/validators.d.mts", types);
    process.stdout.write("✔️\n");
}
