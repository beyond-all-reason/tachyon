import fs from "node:fs";
import path, { dirname } from "node:path";

import Ajv, { ValidateFunction } from "ajv";
import addFormats from "ajv-formats";
import { fileURLToPath } from "url";

import { tachyonMeta } from "@/meta.js";

const meta = tachyonMeta as unknown as Record<string, Record<string, string[]>>;

const validators: Map<string, ValidateFunction> = new Map();
const ajv = new Ajv.default();
let initialised = false;

function init() {
    initialised = true;

    addFormats.default(ajv);
    ajv.addKeyword("roles");

    for (const serviceId in meta.ids) {
        for (const endpointId in meta.ids[serviceId]) {
            for (const commandType of meta.ids[serviceId][endpointId]) {
                const commandId = `${serviceId}/${endpointId}/${commandType}`;
                const jsonSchemaPath = new URL(`${serviceId}/${endpointId}/${commandType}.json`, import.meta.url);
                const commandSchemaStr = fs.readFileSync(jsonSchemaPath, { encoding: "utf-8" });
                const commandSchema = JSON.parse(commandSchemaStr);
                const validator = ajv.compile(commandSchema);
                validators.set(commandId, validator);
            }
        }
    }
}

export function getValidator<T extends { commandId: string }>(command: T): ValidateFunction<T> {
    if (!initialised) {
        init();
    }

    if (typeof command !== "object") {
        throw new Error("Command not object type");
    }

    if (!command.commandId || typeof command.commandId !== "string") {
        throw new Error("Command Id missing");
    }

    const validator = validators.get(command.commandId) as ValidateFunction<T>;
    if (!validator) {
        throw new Error(`Validator not found for: ${command.commandId}`);
    }

    return validator;
}
