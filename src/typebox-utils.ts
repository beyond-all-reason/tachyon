import { SchemaOptions, TSchema, Type } from "@sinclair/typebox";

export const Nullable = <T extends TSchema>(schema: T, options?: SchemaOptions) => Type.Union([schema, Type.Null()], options);
