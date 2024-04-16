/* eslint-disable @typescript-eslint/no-explicit-any */

import { exec } from "node:child_process";
import fs from "node:fs";
import util from "node:util";

import Ajv from "ajv";
import standaloneCode from "ajv/dist/standalone";
import addFormats from "ajv-formats";

const execCommand = util.promisify(exec);

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
    addFormats.default(ajv);
    let moduleCode = `import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { createRequire } from 'node:module';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(__dirname);`;
    moduleCode += standaloneCode(ajv, schemaMap);
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
    addFormats.default(ajvCjs);
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
