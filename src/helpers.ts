/* eslint-disable @typescript-eslint/no-explicit-any */

import { IntersectEvaluate, IntersectReduce, Kind, ObjectOptions, SchemaOptions, TProperties, TSchema, Type } from "@sinclair/typebox";
import { clone } from "jaz-ts-utils";

export type IntersectSchemaArray<T extends TSchema[]> = IntersectReduce<unknown, IntersectEvaluate<T, []>>;
export type TIntersectAllOf<T extends TSchema[]> = ReturnType<typeof IntersectAllOf<T>>;
export interface IntersectAllOfOptions extends SchemaOptions {
    unevaluatedProperties?: boolean;
}
export const IntersectAllOf = <T extends TSchema[]>(allOf: [...T], options: IntersectAllOfOptions = {}) => Type.Unsafe<IntersectSchemaArray<T>>({ ...options, [Kind]: "IntersectAllOf", allOf });
export type EndpointSchema = { request: TSchema } | { response: TSchema };
export type ServiceSchema = Record<string, EndpointSchema>;
export type ServicesSchema = Record<string, ServiceSchema>;

export function endpointsToSchema<T extends Record<string, ServiceSchema>>(services: T) {
    const serviceSchema: any = clone(services);
    for (const serviceId in serviceSchema) {
        const service = serviceSchema[serviceId];
        for (const endpointId in service) {
            const endpoint = service[endpointId];
            for (const endpointTypeId in endpoint) {
                const endpointType = endpoint[endpointTypeId] as TSchema;
                (endpoint[endpointTypeId] as TSchema) = Type.Object(
                    {
                        command: Type.Literal(`${serviceId}/${endpointId}/${endpointTypeId}`),
                        data: endpointType,
                    },
                    { $id: `${serviceId}.${endpointId}.${endpointTypeId}` }
                );
            }
            serviceSchema[serviceId][endpointId] = Type.Object(endpoint, { $id: `${serviceId}.${endpointId}` });
        }
        serviceSchema[serviceId] = Type.Object(service as any, { $id: `${serviceId}` });
    }
    return serviceSchema;
}

export const enableRefs = false; // should remove this eventually and enable refs by default eventually, when Tei can get it working on server end
export function schemaRef<T extends TSchema>(schema: T) {
    return enableRefs ? Type.Ref(schema) : schema;
}

export function success<T extends TProperties>(properties?: T, options?: ObjectOptions) {
    return Type.Object({
        status: Type.Literal("success"),
        ...properties
    }, options);
}

export function failed<R extends string, T extends TProperties>(reason: R, properties?: T, options?: ObjectOptions) {
    return Type.Object({
        status: Type.Literal("failed"),
        reason: Type.Literal(reason),
        ...properties
    }, options);
}