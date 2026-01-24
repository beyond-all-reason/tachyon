/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "node:fs";
import path from "node:path";

import Type, { type TSchema, type TSchemaOptions, type TUnion } from "typebox";
import { pathToFileURL } from "url";

import { EndpointConfig } from "@/generator-helpers.js";
import { writeJsonSchema } from "@/json-schema-format.js";
import { TachyonActor, TachyonMessageType } from "@/tachyon-constants.js";
const schemaBaseUri = "https://schema.beyondallreason.dev/tachyon";

export type CompiledSchema = TUnion<TSchema[]> & { definitions: { [key: string]: TSchema } };

export type TachyonConfig = {
    commandConfigs: Record<`${string}/${string}`, CommandConfig>;
    compiledSchema: CompiledSchema;
    schemaMeta: SchemaMeta;
};

type SchemaMeta = {
    actors: Record<TachyonActor, Record<TachyonMessageType, { send: string[]; receive: string[] }>>;
    serviceIds: Record<string, string[]>;
    failedReasons: Record<string, string[]>;
};

export type CommandConfig =
    | ReturnType<typeof buildRequestResponseCommand>
    | ReturnType<typeof buildEventCommand>;

const commandConfigs: TachyonConfig["commandConfigs"] = {};

export function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function buildRequestResponseCommand(
    commandId: `${string}/${string}`,
    baseTypeName: string,
    schemaConfig: Extract<EndpointConfig, { request: unknown }>
) {
    let requestSchema = Type.Object(
        {
            type: Type.Literal("request"),
            messageId: Type.String(),
            commandId: Type.Literal(commandId),
            ...(schemaConfig.request.data && {
                data: setTSchemaOptions(schemaConfig.request.data, {
                    title: baseTypeName + "RequestData",
                }),
            }),
        },
        {
            $schema: "http://json-schema.org/draft-07/schema#",
            $id: `${schemaBaseUri}/${commandId}/request.json`,
            title: baseTypeName + "Request",
            tachyon: {
                source: schemaConfig.source,
                target: schemaConfig.target,
                scopes: schemaConfig.scopes,
            },
        }
    );
    requestSchema = mapRefs(requestSchema, (ref) => `../../definitions/${ref}.json`);

    const successResponses = schemaConfig.response.filter((schema) => schema.status == "success");
    const failedResponses = schemaConfig.response.filter((schema) => schema.status == "failed");
    if (successResponses.length === 0) {
        throw new Error(`Endpoint ${commandId} does not have a success response`);
    }
    if (failedResponses.length === 0) {
        throw new Error(`Endpoint ${commandId} does not have a failed response`);
    }
    if (successResponses.length != 1) {
        throw new Error(`Endpoint ${commandId} must have exactly one success response`);
    }
    const successResponse = successResponses[0];

    const failedReasons = failedResponses.map((schema) => schema.reason);
    let responseSchema = Type.Union(
        [
            Type.Object(
                {
                    type: Type.Literal("response"),
                    messageId: Type.String(),
                    commandId: Type.Literal(commandId),
                    status: Type.Literal(successResponse.status),
                    ...(successResponse.data && {
                        data: setTSchemaOptions(successResponse.data, {
                            title: baseTypeName + "OkResponseData",
                        }),
                    }),
                },
                { title: baseTypeName + "OkResponse" }
            ),
            Type.Object(
                {
                    type: Type.Literal("response"),
                    messageId: Type.String(),
                    commandId: Type.Literal(commandId),
                    status: Type.Literal("failed"),
                    reason: Type.Enum(failedReasons),
                    details: Type.Optional(Type.String()),
                },
                { title: baseTypeName + "FailResponse" }
            ),
        ] as const,
        {
            $schema: "http://json-schema.org/draft-07/schema#",
            $id: `${schemaBaseUri}/${commandId}/response.json`,
            title: baseTypeName + "Response",
            tachyon: {
                source: schemaConfig.target,
                target: schemaConfig.source,
                scopes: schemaConfig.scopes,
            },
        }
    );
    responseSchema = mapRefs(responseSchema, (ref) => `../../definitions/${ref}.json`);

    return Object.freeze({
        type: "requestResponse" as const,
        commandId,
        config: schemaConfig,
        schema: { request: requestSchema, response: responseSchema },
        failedReasons,
    });
}

function buildEventCommand(
    commandId: `${string}/${string}`,
    baseTypeName: string,
    schemaConfig: Extract<EndpointConfig, { event: unknown }>
) {
    let eventSchema = Type.Object(
        {
            type: Type.Literal("event"),
            messageId: Type.String(),
            commandId: Type.Literal(commandId),
            ...(schemaConfig.event.data && {
                data: setTSchemaOptions(schemaConfig.event.data, {
                    title: baseTypeName + "EventData",
                }),
            }),
        },
        {
            $schema: "http://json-schema.org/draft-07/schema#",
            $id: `${schemaBaseUri}/${commandId}/event.json`,
            title: baseTypeName + "Event",
            tachyon: {
                source: schemaConfig.source,
                target: schemaConfig.target,
                scopes: schemaConfig.scopes,
            },
        }
    );
    eventSchema = mapRefs(eventSchema, (ref) => `../../definitions/${ref}.json`);
    return Object.freeze({
        commandId,
        schema: { event: eventSchema },
        config: schemaConfig,
        type: "event" as const,
    });
}

export async function generateJsonSchemas(): Promise<TachyonConfig> {
    const serviceDirs = path.join(import.meta.dirname, "schema");
    const serviceHandlerDirs = (await fs.promises.readdir(serviceDirs)).sort();

    for (const serviceId of serviceHandlerDirs) {
        if (serviceId.includes(".") || serviceId === "definitions") {
            continue;
        }
        const endpointDir = path.join(serviceDirs, serviceId);
        const endpointSchemaModules = (await fs.promises.readdir(endpointDir)).sort();

        for (const endpointSchemaPath of endpointSchemaModules) {
            if (endpointSchemaPath.endsWith(".md")) {
                continue;
            }
            const endpointId = path.parse(endpointSchemaPath).name;
            const endpoint = await import(
                pathToFileURL(path.join(endpointDir, endpointSchemaPath)).toString()
            );
            const schemaConfig = endpoint.default as EndpointConfig;

            await fs.promises.mkdir(path.join("schema", serviceId, endpointId), {
                recursive: true,
            });

            if (!schemaConfig.source) {
                throw new Error(`Endpoint ${serviceId}/${endpointId} does not have a source field`);
            }

            if (!schemaConfig.target) {
                throw new Error(`Endpoint ${serviceId}/${endpointId} does not have a target field`);
            }

            if ("request" in schemaConfig && "event" in schemaConfig) {
                throw new Error(
                    `Endpoint ${serviceId}/${endpointId} cannot have both a request and an event`
                );
            }

            if (!("request" in schemaConfig || "event" in schemaConfig)) {
                throw new Error(
                    `Endpoint ${serviceId}/${endpointId} must have either a request or an event`
                );
            }

            if ("request" in schemaConfig && !("response" in schemaConfig)) {
                throw new Error(
                    `Endpoint ${serviceId}/${endpointId} must have a response if it has a request`
                );
            }

            if ("response" in schemaConfig && !("request" in schemaConfig)) {
                throw new Error(
                    `Endpoint ${serviceId}/${endpointId} must have a request if it has a response`
                );
            }

            const commandId = `${serviceId}/${endpointId}` as const;
            const baseTypeName = `${capitalize(serviceId)}${capitalize(endpointId)}`;
            if ("request" in schemaConfig) {
                const config = buildRequestResponseCommand(commandId, baseTypeName, schemaConfig);
                await writeJsonSchema(
                    `schema/${serviceId}/${endpointId}/request.json`,
                    config.schema.request
                );
                await writeJsonSchema(
                    `schema/${serviceId}/${endpointId}/response.json`,
                    config.schema.response
                );
                commandConfigs[commandId] = config;
            } else if ("event" in schemaConfig) {
                const config = buildEventCommand(commandId, baseTypeName, schemaConfig);
                await writeJsonSchema(
                    `schema/${serviceId}/${endpointId}/event.json`,
                    config.schema.event
                );
                commandConfigs[commandId] = config;
            }
        }
    }

    await fs.promises.mkdir("schema/definitions", { recursive: true });
    const definitionsMap: Record<string, TSchema> = {};
    const definitionsPath = path.join(import.meta.dirname, "schema", "definitions");
    const definitionFiles = (await fs.promises.readdir(definitionsPath)).sort();
    for (const definitionFile of definitionFiles) {
        if (!definitionFile.endsWith(".ts")) {
            continue;
        }
        const name = path.parse(definitionFile).name;
        const imports = await import(
            pathToFileURL(path.join(definitionsPath, definitionFile)).toString()
        );
        const key = Object.keys(imports)[0];
        if (key !== name) {
            throw new Error(
                `Definition schema does not have the same name as the file: ${definitionFile}`
            );
        }
        let schema = imports[key];
        if (!schema.$id) {
            throw new Error(`Definition schema does not have a $id field: ${definitionFile}`);
        }
        if (schema.$id !== name) {
            throw new Error(`Definition schema $id does not match the name: ${definitionFile}`);
        }
        // We need to have ternary in mapper below because the schema might have been modified by us already.
        schema = mapRefs(schema, (ref) => `../definitions/${ref}.json`);
        definitionsMap[name] = schema;

        await writeJsonSchema(
            `schema/definitions/${name}.json`,
            setTSchemaOptions(schema, {
                $id: `${schemaBaseUri}/definitions/${name}.json`,
                title: capitalize(name),
            })
        );
    }

    const schemaMeta: SchemaMeta = {
        actors: {
            server: {
                request: { send: [], receive: [] },
                response: { send: [], receive: [] },
                event: { send: [], receive: [] },
            },
            user: {
                request: { send: [], receive: [] },
                response: { send: [], receive: [] },
                event: { send: [], receive: [] },
            },
            autohost: {
                request: { send: [], receive: [] },
                response: { send: [], receive: [] },
                event: { send: [], receive: [] },
            },
        },
        serviceIds: {},
        failedReasons: {},
    };

    const individualSchemas: TSchema[] = [];

    for (const commandConfig of Object.values(commandConfigs)) {
        const [serviceId, endpointId] = commandConfig.commandId.split("/") as [string, string];

        if (commandConfig.type === "requestResponse") {
            schemaMeta.actors[commandConfig.config.source].request.send.push(
                commandConfig.commandId
            );
            schemaMeta.actors[commandConfig.config.target].request.receive.push(
                commandConfig.commandId
            );
            schemaMeta.actors[commandConfig.config.source].response.receive.push(
                commandConfig.commandId
            );
            schemaMeta.actors[commandConfig.config.target].response.send.push(
                commandConfig.commandId
            );

            individualSchemas.push(commandConfig.schema.request);
            individualSchemas.push(commandConfig.schema.response);
            schemaMeta.failedReasons[commandConfig.commandId] = commandConfig.failedReasons;
        } else if ("event" in commandConfig.config) {
            schemaMeta.actors[commandConfig.config.source].event.send.push(commandConfig.commandId);
            schemaMeta.actors[commandConfig.config.target].event.receive.push(
                commandConfig.commandId
            );

            individualSchemas.push(commandConfig.schema.event);
        } else {
            throw new Error(`Endpoint ${commandConfig.commandId} has an invalid schema`);
        }

        if (!schemaMeta.serviceIds[serviceId]) {
            schemaMeta.serviceIds[serviceId] = [endpointId];
        } else {
            schemaMeta.serviceIds[serviceId].push(endpointId);
        }
    }

    const dropIdSchema = (d: TSchema) =>
        setTSchemaOptions(d, { $id: undefined, $schema: undefined });
    for (const def in definitionsMap) {
        definitionsMap[def] = dropIdSchema(definitionsMap[def]);
    }
    let compiledSchema = Type.Union(individualSchemas.map(dropIdSchema), {
        $schema: "http://json-schema.org/draft-07/schema#",
        $id: `${schemaBaseUri}/compiled.json`,
        title: "TachyonCommand",
        definitions: Object.freeze(definitionsMap),
    }) as CompiledSchema;
    compiledSchema = mapRefs(compiledSchema, (ref) =>
        ref.replace(/.*\/definitions\/(.*)\.json/, "#/definitions/$1")
    );
    await writeJsonSchema("schema/compiled.json", compiledSchema);

    return { commandConfigs, compiledSchema, schemaMeta };
}

/**
 * Creates a shallow clone of given type objects.
 *
 * Because all type objects are frozen, also takes a modify function
 * that allows to do whatever operations on new object before it's
 * frozen. Assumptions is that type will be equivalent.
 */
function shallowCloneType<T extends TSchema>(
    type: T,
    modify: (o: Record<any, unknown>) => void
): T {
    const result = {} as Record<any, unknown>;
    const descriptors = Object.getOwnPropertyDescriptors(type);
    for (const [key, { enumerable, value }] of Object.entries(descriptors)) {
        Object.defineProperty(result, key, {
            value,
            enumerable,
            writable: true,
            configurable: true,
        });
    }
    modify(result);
    return Object.freeze(result);
}

/**
 * Creates a copy of type object with new schema options set.
 *
 * Setting option to `undefined` will drop it from options.
 */
export function setTSchemaOptions<T extends TSchema>(schema: T, options: TSchemaOptions): T {
    return shallowCloneType(schema, (o) => {
        for (const [key, value] of Object.entries(options)) {
            if (value === undefined) {
                delete o[key];
            } else {
                o[key] = value;
            }
        }
    });
}

/**
 * Applies a function to all $refs recursively in a type returning new type.
 */
export function mapRefs<T extends TSchema>(schema: T, f: (ref: string) => string): T {
    if (Array.isArray(schema)) {
        return schema.map((e) => (Type.IsSchema(e) ? mapRefs(e, f) : e)) as unknown as T;
    }
    return shallowCloneType(schema, (o) => {
        for (const k in o) {
            if (Type.IsSchema(o[k])) {
                o[k] = mapRefs(o[k], f);
            } else if (k === "$ref" && typeof o[k] === "string") {
                o[k] = f(o[k]);
            }
        }
    });
}
