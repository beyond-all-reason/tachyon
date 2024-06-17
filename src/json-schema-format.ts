/**
 * This whole module purpose is only to nicely format the output JSON schema files
 * and make them a little bit more human readable.
 */
import fs from "node:fs/promises";

import * as prettier from "prettier";

export async function stringifyJsonSchema(schema: object) {
    const schemaStr = JSON.stringify(reorderSchemaObject(schema));
    return prettier.format(schemaStr, { parser: "json", tabWidth: 4, printWidth: 80 });
}

export async function writeJsonSchema(path: string, schema: object) {
    await fs.writeFile(path, await stringifyJsonSchema(schema));
}

const schemaKeywordOrder = [
    "$id",
    "$schema",
    "$ref",
    "title",
    "tachyon",
    "description",
    "$comment",
    "type",
    "items",
    "enum",
    "const",
    "format",
    "pattern",
    "properties",
    "required",
    "additionalProperties",
    "definitions",
    "anyOf",
    "allOf",
    "oneOf",
    "source",
    "target",
    "scopes",
    "examples",
];

function reorderSchemaObject<T>(schema: T): T {
    if (schema instanceof Array) {
        return schema.map((item) => reorderSchemaObject(item)) as T;
    }
    if (typeof schema !== "object" || schema === null) {
        return schema;
    }
    const orderedSchema: Record<string, unknown> = {};
    for (const key of schemaKeywordOrder) {
        // Skip type when const is present as it is redundant
        if ("const" in schema && key === "type") {
            continue;
        }
        if (key in schema) {
            const val = schema[key as keyof T];
            if (key === "properties") {
                orderedSchema[key] = Object.fromEntries(
                    Object.entries(val as object).map(([k, v]) => [k, reorderSchemaObject(v)])
                );
            } else if (key === "examples") {
                orderedSchema[key] = val;
            } else {
                orderedSchema[key] = reorderSchemaObject(val);
            }
        }
    }
    for (const key in schema) {
        if (key === "type") continue;
        if (!(key in orderedSchema)) {
            orderedSchema[key] = reorderSchemaObject(schema[key]);
        }
    }
    return orderedSchema as T;
}
