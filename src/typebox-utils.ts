import Type, { type TSchema, type TSchemaOptions } from "typebox";

export const Nullable = <T extends TSchema>(schema: T, options?: TSchemaOptions) =>
    Type.Union([schema, Type.Null()], options);
