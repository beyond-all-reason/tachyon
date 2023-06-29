import { SchemaOptions, Static, TIntersect, TLiteral, TObject, TSchema, TUnion, Type } from "@sinclair/typebox";

export type EndpointSchema = {
    order?: number;
} & (
    | {
          request: RequestSchema;
      }
    | {
          response: ResponseSchema;
      }
);

export type RequestSchema = TObject<
    | {
          command: TLiteral;
          data: TObject | TUnion | TIntersect;
      }
    | {
          command: TLiteral;
      }
>;

export type ResponseSchema = TUnion<Array<SuccessResponseSchema | FailedResponseSchema>>;

export type SuccessResponseSchema = TObject<
    | {
          command: TLiteral<"">;
          status: TLiteral<"success">;
          data?: TObject;
      }
    | {
          command: TLiteral<"">;
          status: TLiteral<"success">;
      }
>;

export type FailedResponseSchema = TObject<{
    command: TLiteral;
    status: TLiteral<"failed">;
    reason: TUnion<TLiteral[]>;
}>;

export interface CustomSchemaOptions<T extends TSchema> extends SchemaOptions {
    default?: Static<T>;
    examples?: T extends TSchema ? Static<T>[] : never;
}

export function defineRequest<T extends TSchema>(data?: T, examples?: Static<T>[]) {
    return {
        data,
    };
}

export function defineResponse<T extends Array<SuccessResponseSchema | FailedResponseSchema>>(response: T): ResponseSchema {
    return Type.Union(response);
}

export function success(data?: TObject): SuccessResponseSchema {
    return data
        ? Type.Object({
              command: Type.Literal(""),
              status: Type.Literal("success"),
              data,
          })
        : Type.Object({
              command: Type.Literal(""),
              status: Type.Literal("success"),
          });
}

export function failed<T extends string[]>(reason: T): FailedResponseSchema {
    return Type.Object({
        command: Type.Literal(""),
        status: Type.Literal("failed"),
        reason: Type.Union([Type.Literal("internal_error"), ...reason.map((r) => Type.Literal(r))]),
    });
}
