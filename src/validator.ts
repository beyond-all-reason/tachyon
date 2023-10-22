import Ajv, { ErrorObject, ValidateFunction } from "ajv";
import addFormats from "ajv-formats";
import fs from "fs";
import path from "path";

let tachyonMeta: { version: string; ids: Record<string, Record<string, string[]>> } = {
    version: "N/A",
    ids: {},
};
const validators: Map<string, ValidateFunction> = new Map();
const ajv = new Ajv({ coerceTypes: true });
let initialised = false;

function init() {
    initialised = true;

    addFormats.default(ajv);
    ajv.addKeyword("requiresLogin");
    ajv.addKeyword("requiresRole");

    const tachyonMetaStr = fs.readFileSync(path.join(__dirname, `./meta.json`), {
        encoding: "utf-8",
    });
    tachyonMeta = JSON.parse(tachyonMetaStr);

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

export function validateCommand<T extends { command: string }>(
    command: T
): T | ErrorObject<string, Record<string, any>, unknown>[] {
    if (!initialised) {
        init();
    }

    try {
        if (typeof command !== "object") {
            throw new Error("Command not object type");
        }

        if (!command.command || typeof command.command !== "string") {
            throw new Error("Command Id missing");
        }

        const validator = validators.get(command.command);
        if (!validator) {
            throw new Error(`Validator not found for: ${command.command}`);
        }

        const isValid = validator(command);
        if (isValid) {
            return command;
        }

        return validator.errors as ErrorObject<string, Record<string, any>, unknown>[];
    } catch (err) {
        console.error(`Error validating command:`, err, command);
        throw err;
    }
}
