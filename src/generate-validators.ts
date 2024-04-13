import fs from "node:fs";
import path, { dirname } from "node:path";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import standaloneCode from "ajv/dist/standalone";
import { tachyonMeta } from "@/meta.js";

export async function generateValidators(schemas: any) {
    const schemaArray: any[] = [];

    for (const serviceId in schemas.properties) {
        for (const endpointId in schemas.properties[serviceId].properties) {
            for (const commandType in schemas.properties[serviceId].properties[endpointId].properties) {
                const schema = schemas.properties[serviceId].properties[endpointId].properties[commandType];
                schemaArray.push(schema);
            }
        }
    }

    const ajv = new Ajv.default({
        schemas: schemaArray,
        code: {
            source: true,
        },
        keywords: ["roles"],
    });

    addFormats.default(ajv);

    const moduleCode = standaloneCode.default(ajv);

    await fs.promises.writeFile("./dist/validators.cjs", moduleCode);

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
