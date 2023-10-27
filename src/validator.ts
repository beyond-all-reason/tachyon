import Ajv, { ErrorObject, ValidateFunction } from "ajv";
import addFormats from "ajv-formats";
import fs from "fs";
import path from "path";

export const tachyonMeta: { version: string; ids: Record<string, Record<string, string[]>> } =
    JSON.parse(
        fs.readFileSync(path.join(__dirname, `./meta.json`), {
            encoding: "utf-8",
        })
    );

const validators: Map<string, ValidateFunction> = new Map();
const ajv = new Ajv({ coerceTypes: true });
let initialised = false;

function init() {
    initialised = true;

    addFormats.default(ajv);
    ajv.addKeyword("requiresLogin");
    ajv.addKeyword("requiresRole");

    for (const serviceId in tachyonMeta.ids) {
        for (const endpointId in tachyonMeta.ids[serviceId]) {
            for (const commandType of tachyonMeta.ids[serviceId][endpointId]) {
                const commandId = `${serviceId}/${endpointId}/${commandType}`;
                const commandSchemaStr = fs.readFileSync(
                    path.join(__dirname, `./${serviceId}/${endpointId}/${commandType}.json`),
                    { encoding: "utf-8" }
                );
                const commandSchema = JSON.parse(commandSchemaStr);
                const validator = ajv.compile(commandSchema);
                validators.set(commandId, validator);
            }
        }
    }
}

export function getValidator<T extends { command: string }>(command: T): ValidateFunction<T> {
    if (!initialised) {
        init();
    }

    if (typeof command !== "object") {
        throw new Error("Command not object type");
    }

    if (!command.command || typeof command.command !== "string") {
        throw new Error("Command Id missing");
    }

    const validator = validators.get(command.command) as ValidateFunction<T>;
    if (!validator) {
        throw new Error(`Validator not found for: ${command.command}`);
    }

    return validator;
}
