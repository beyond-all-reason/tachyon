import {
    SchemaOptions,
    Static,
    TIntersect,
    TObject,
    TRef,
    TSchema,
    TUnion,
} from "@sinclair/typebox";
import { SetOptional } from "type-fest";

import { TachyonActor } from "@/tachyon-constants";

export type EndpointConfig = {
    /** Where the command should be sent from */
    source: TachyonActor;
    /** Where the command should be sent to */
    target: TachyonActor;
    /** Briefly describes what the command is for */
    description?: string;
    /** Restrict the command to only be usable by clients with these scopes. @default ["tachyon.lobby"] */
    scopes: string[];
    /** For documentation only, for displaying commands in a specific order instead of alphabetical */
    order?: number;
} & (
    | {
          /** A request will always have a correlating response.
           *
           * Is defined with TypeBox, describing the shape of the data, gets resolves to JSONSchema.
           * */
          request: DataSchema;
          /** A response to a request. Has a `status` property which can be either `success` or `failed`.
           *
           * If status is `failed`, a `reason` string must also be provided.
           *
           * `success` responses may optionally include `data`, defined with TypeBox, describing the
           * shape of the data, gets resolves to JSONSchema.
           * */
          response: ResponseSchema;
      }
    | {
          /**
           * An event is a one-way message containing data that doesn't need to be responded to or
           * acknowledged.
           *
           * Is defined with TypeBox, describing the shape of the data, gets resolves to JSONSchema. */
          event: DataSchema;
      }
);

export type DataSchema = {
    data?: TObject | TUnion | TIntersect | TRef<TObject | TUnion | TIntersect>;
};

export type ResponseSchema = Array<SuccessResponseSchema | FailedResponseSchema>;

export type SuccessResponseSchema = {
    status: "success";
    title?: string;
} & DataSchema;

export type FailedResponseSchema = {
    status: "failed";
    reason: string;
};

export interface CustomSchemaOptions<T extends TSchema> extends SchemaOptions {
    default?: Static<T>;
    examples?: T extends TSchema ? Static<T>[] : never;
}

export function defineEndpoint(endpointConfig: SetOptional<EndpointConfig, "scopes">) {
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
                reason: "invalid_request",
            },
            {
                status: "failed",
                reason: "command_unimplemented",
            }
        );
    }

    if (!endpointConfig.scopes) {
        endpointConfig.scopes = [];
    }
    endpointConfig.scopes.push("tachyon.lobby");

    return endpointConfig;
}
