import { SchemaOptions, Static, TIntersect, TObject, TSchema, TUnion } from "@sinclair/typebox";
import { SetOptional } from "type-fest";

export type EndpointConfig = {
    description?: string;
    /** Restrict the command to only be usable by users with specific roles. */
    roles: string[];
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

export function defineEndpoint(endpointConfig: SetOptional<EndpointConfig, "roles">) {
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

    if (!endpointConfig.roles) {
        endpointConfig.roles = [];
    }

    return endpointConfig;
}
