/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from "node:fs";
import path from "node:path";

import Ajv from "ajv";
import standaloneCode from "ajv/dist/standalone";
import addFormats from "ajv-formats";

export async function generateValidators() {
    const schemaMap: Record<string, string> = {};
    const schamaTitle: Record<string, string> = {};
    const validatorsName: Record<string, Record<string, string>> = {};

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
            const commandId = properties.commandId.const;
            const [serviceId, endpointId] = commandId.split("/");
            const commandType = properties.type.const;
            const schemaKey = `${serviceId}_${endpointId}_${commandType}`;
            schemaMap[schemaKey] = schema.$id;
            schamaTitle[schemaKey] = schema.title;
            if (!validatorsName[commandId]) {
                validatorsName[commandId] = {};
            }
            validatorsName[commandId][commandType] = schemaKey;
        }
    }

    // mapping
    let validator = "validator = {";
    for (const commandId in validatorsName) {
        validator += `"${commandId}": {`;
        for (const commandType in validatorsName[commandId]) {
            validator += `"${commandType}": exports.${validatorsName[commandId][commandType]},`;
        }
        validator += "},";
    }
    validator += "};";

    let validatorType = "declare const validator: {\n";
    for (const commandId in validatorsName) {
        validatorType += `    readonly "${commandId}": {\n`;
        for (const commandType in validatorsName[commandId]) {
            validatorType += `        readonly "${commandType}": ValidateFunction<${schamaTitle[validatorsName[commandId][commandType]]}>;\n`;
        }
        validatorType += "    };\n";
    }
    validatorType += "};";

    // esm
    process.stdout.write("Generating ESM validators...");
    const ajvEsm = new Ajv({
        schemas: schemas,
        code: {
            source: true,
            esm: true,
        },
        keywords: ["tachyon"],
    });
    addFormats(ajvEsm);
    let moduleCode = `"use strict"
import * as ajvFormats from "ajv-formats/dist/formats.js";
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
    moduleCode = moduleCode.replaceAll('require("ajv-formats/dist/formats").', "ajvFormats.");
    moduleCode += "export const " + validator.replaceAll("exports.", "");
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
        keywords: ["tachyon"],
    });
    addFormats(ajvCjs);
    const moduleCodeCjs = standaloneCode(ajvCjs, schemaMap) + "exports." + validator;
    await fs.promises.writeFile("./dist/validators.js", moduleCodeCjs);
    process.stdout.write("✔️\n");

    // types
    process.stdout.write("Generating validator types...");
    const imports: string[] = [];
    let declarations = "";
    for (const key in schemaMap) {
        imports.push(schamaTitle[key]);
        declarations += `declare const ${key}: ValidateFunction<${schamaTitle[key]}>;\n`;
    }
    let types = "";
    types += `import type { ValidateFunction } from "ajv"\n`;
    types += `import type { ${imports.join(", ")} } from "./types.js";\n\n`;
    types += declarations;
    types += "\n" + validatorType + "\n";
    types += `\nexport { validator, ${Object.keys(schemaMap).join(", ")} };`;

    await fs.promises.writeFile("./dist/validators.d.ts", types);
    await fs.promises.writeFile("./dist/validators.d.mts", types.replace(".js", ".mjs"));
    process.stdout.write("✔️\n");
}
