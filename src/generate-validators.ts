/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from "node:fs";

import Ajv from "ajv";
import standaloneCode from "ajv/dist/standalone";

export async function generateValidators(schemas: any) {
    const schemaArray: any[] = [];
    const schemaMap: Record<string, string> = {};

    for (const serviceId in schemas.properties) {
        for (const endpointId in schemas.properties[serviceId].properties) {
            for (const commandType in schemas.properties[serviceId].properties[endpointId].properties) {
                const schema = schemas.properties[serviceId].properties[endpointId].properties[commandType];
                schemaArray.push(schema);
                schemaMap[`${serviceId}_${endpointId}_${commandType}`] = `${serviceId}/${endpointId}/${commandType}`;
            }
        }
    }

    // esm
    const ajv = new Ajv({
        schemas: schemaArray,
        code: {
            source: true,
            esm: true,
        },
        keywords: ["roles"],
    });
    let moduleCode = `"use strict"
import ucs2length from "ajv/dist/runtime/ucs2length";
`;
    moduleCode += standaloneCode(ajv, schemaMap);
    moduleCode = moduleCode.replaceAll('require("ajv/dist/runtime/ucs2length").default', "ucs2length");
    moduleCode = moduleCode.replaceAll('require("ajv-formats/dist/formats").', "");
    await fs.promises.writeFile("./dist/validators.mjs", moduleCode);

    // cjs
    const ajvCjs = new Ajv({
        schemas: schemaArray,
        code: {
            source: true,
            esm: false,
        },
        keywords: ["roles"],
    });
    const moduleCodeCjs = standaloneCode(ajvCjs, schemaMap);
    await fs.promises.writeFile("./dist/validators.js", moduleCodeCjs);

    // types
    let types = `import type { ValidateFunction } from "ajv"\n`;
    for (const key in schemaMap) {
        types += `declare const ${key}: ValidateFunction;\n`;
    }
    types += `export { ${Object.keys(schemaMap).join(", ")} };`;

    //     const types = `import type { ValidateFunction } from "ajv";
    // declare const validators: Record<string, ValidateFunction>;
    // export default validators;`;
    await fs.promises.writeFile("./dist/validators.d.ts", types);
    await fs.promises.writeFile("./dist/validators.d.mts", types);
}
