/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from "node:fs";

import Ajv from "ajv";
import standaloneCode from "ajv/dist/standalone";
import addFormats from "ajv-formats";

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
    const ajv = new Ajv.default({
        schemas: schemaArray,
        code: {
            source: true,
            esm: true,
        },
        keywords: ["roles"],
    });
    addFormats.default(ajv);
    let moduleCode = `import { createRequire } from 'module';const require = createRequire(import.meta.url);`;
    moduleCode += standaloneCode.default(ajv, schemaMap);
    await fs.promises.appendFile("./dist/validators.js", moduleCode);

    // cjs
    const ajvCjs = new Ajv.default({
        schemas: schemaArray,
        code: {
            source: true,
            esm: false,
        },
        keywords: ["roles"],
    });
    addFormats.default(ajvCjs);
    const moduleCodeCjs = standaloneCode.default(ajvCjs, schemaMap);
    await fs.promises.appendFile("./dist/validators.cjs", moduleCodeCjs);

    //console.log(schemas);
    // const meta = tachyonMeta as unknown as Record<string, Record<string, string[]>>;
    // const schemas: any[] = [];
    // const ajv = new Ajv.default({ code: { esm: true, source: true } });

    // addFormats.default(ajv);
    // ajv.addKeyword("roles");

    // let thing = "";

    // for (const serviceId in meta.ids) {
    //     for (const endpointId in meta.ids[serviceId]) {
    //         for (const commandType of meta.ids[serviceId][endpointId]) {
    //             const commandId = `${serviceId}/${endpointId}/${commandType}`;
    //             const jsonSchemaPath = new URL(
    //                 `../dist/${serviceId}/${endpointId}/${commandType}.json`,
    //                 import.meta.url
    //             ).href;
    //             const commandSchema = await import(jsonSchemaPath, { assert: { type: "json" } });
    //             schemas.push(commandSchema);
    //             const validator = ajv.compile(commandSchema);
    //             thing += standaloneCode.default(ajv, validator);
    //         }
    //     }
    // }

    // await fs.promises.writeFile("./dist/validators.mjs", thing);
}

// export async function getValidator<T extends { commandId: string }>(command: T): Promise<Ajv.ValidateFunction<T>> {
//     if (!initialised) {
//         await init();
//     }

//     if (typeof command !== "object") {
//         throw new Error("Command not object type");
//     }

//     if (!command.commandId || typeof command.commandId !== "string") {
//         throw new Error("Command Id missing");
//     }

//     const validator = validators.get(command.commandId) as ValidateFunction<T>;
//     if (!validator) {
//         throw new Error(`Validator not found for: ${command.commandId}`);
//     }

//     return validator;
// }
