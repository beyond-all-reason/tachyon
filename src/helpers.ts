import { SchemaOptions, Static, TIntersect, TObject, TSchema, TUnion, Type } from "@sinclair/typebox";

export type EndpointConfig = {
    description?: string;
    order?: number;
} & (
    | {
          request: RequestSchema;
      }
    | {
          response: ResponseSchema;
      }
);

export type RequestSchema = {
    data?: TObject | TUnion | TIntersect;
};

export type ResponseSchema = Array<SuccessResponseSchema | FailedResponseSchema>;

export type SuccessResponseSchema = {
    status: "success";
    data?: TObject | TUnion | TIntersect;
};

export type FailedResponseSchema = {
    status: "failed";
    reason: string;
};

export interface CustomSchemaOptions<T extends TSchema> extends SchemaOptions {
    default?: Static<T>;
    examples?: T extends TSchema ? Static<T>[] : never;
}

export function defineEndpoint(endpointConfig: EndpointConfig) {
    if ("response" in endpointConfig) {
        endpointConfig.response.push({
            status: "failed",
            reason: "internal_error",
        });
    }
    return endpointConfig;
}

export const Nullable = <T extends TSchema>(schema: T) => Type.Union([schema, Type.Null()]);
