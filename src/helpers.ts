import { IntersectEvaluate, IntersectReduce, Kind, SchemaOptions, TSchema, Type } from "@sinclair/typebox";


export type IntersectSchemaArray<T extends TSchema[]> = IntersectReduce<unknown, IntersectEvaluate<T, []>>

export type TIntersectAllOf<T extends TSchema[]> = ReturnType<typeof IntersectAllOf<T>>

export interface IntersectAllOfOptions extends SchemaOptions { unevaluatedProperties?: boolean }

export const IntersectAllOf = <T extends TSchema[]>(allOf: [...T], options: IntersectAllOfOptions = {}) =>
    Type.Unsafe<IntersectSchemaArray<T>>({ ...options, [Kind]: 'IntersectAllOf', allOf })

export type Endpoint = { request: TSchema } | { response: TSchema };

export type Service = Record<string, Endpoint>;

export type Services = Record<string, Service>;

export function endpointsToSchema<T extends Record<string, Service>>(services: T) {
    const serviceSchema: any = services;
    for (const serviceId in services) {
        const service = services[serviceId];
        for (const endpointId in service) {
            const endpoint = service[endpointId];
            for (const endpointTypeId in endpoint) {
                const endpointType = endpoint[endpointTypeId] as TSchema;
                (endpoint[endpointTypeId] as TSchema) = Type.Object({
                    cmd: Type.Literal(`${serviceId}/${endpointId}/${endpointTypeId}`),
                    data: endpointType
                }, { $id: `${serviceId}.${endpointId}.${endpointTypeId}` });
            }
            serviceSchema[serviceId][endpointId] = Type.Object(endpoint, { $id: `${serviceId}.${endpointId}` });
        }
        serviceSchema[serviceId] = Type.Object(service as any, { $id: `${serviceId}` });
    }
    return serviceSchema;
}

export const enableRefs = false; // should remove this eventually and enable refs by default eventually, when Tei can get it working on server end
export function schemaRef(schema: TSchema) {
    return enableRefs ? Type.Ref(schema) : schema;
}