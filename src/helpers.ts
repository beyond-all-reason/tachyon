import { IntersectEvaluate, IntersectReduce, Kind, SchemaOptions, TSchema, Type } from "@sinclair/typebox";

export type IntersectSchemaArray<T extends TSchema[]> = IntersectReduce<unknown, IntersectEvaluate<T, []>>

export type TIntersectAllOf<T extends TSchema[]> = ReturnType<typeof IntersectAllOf<T>>

export interface IntersectAllOfOptions extends SchemaOptions { unevaluatedProperties?: boolean }

export const IntersectAllOf = <T extends TSchema[]>(allOf: [...T], options: IntersectAllOfOptions = {}) =>
  Type.Unsafe<IntersectSchemaArray<T>>({ ...options, [Kind]: 'IntersectAllOf', allOf })

export type Endpoint = { request: TSchema } | { response: TSchema };

export type Service = Record<string, Endpoint>;

export type Services = Record<string, Service>;