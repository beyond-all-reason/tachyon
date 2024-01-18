import { SchemaOptions, Static, TIntersect, TObject, TSchema, TUnion } from "@sinclair/typebox";

export type EndpointConfig = {
    description?: string;
    /** @default true */
    requiresLogin?: boolean;
    /** @default "" */
    requiresRole?: string;
    order?: number;
} & (
    | {
          request: RequestSchema;
          response: ResponseSchema;
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
    data?: TObject | TUnion | TIntersect;
};

export interface CustomSchemaOptions<T extends TSchema> extends SchemaOptions {
    default?: Static<T>;
    examples?: T extends TSchema ? Static<T>[] : never;
}

export function defineEndpoint(endpointConfig: EndpointConfig) {
    if ("response" in endpointConfig) {
        endpointConfig.response.push(
            {
                status: "failed",
                reason: "internal_error",
            },
            {
                status: "failed",
                reason: "unauthorized",
            },
            {
                status: "failed",
                reason: "invalid_command",
            }
        );
    }
    return endpointConfig;
}
