import { SchemaOptions, Static, TIntersect, TObject, TSchema, TUnion } from "@sinclair/typebox";

export type EndpointConfig = {
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

export function defineEndpoint<T extends EndpointConfig>(endpointConfig: T): T {
    if ("response" in endpointConfig) {
        endpointConfig.response.push({
            status: "failed",
            reason: "internal_error",
        });
    }
    return endpointConfig;
}

// export function success(data?: TObject): SuccessResponseSchema {
//     return data
//         ? Type.Object({
//               status: Type.Literal("success"),
//               data,
//           })
//         : Type.Object({
//               status: Type.Literal("success"),
//           });
// }

// export function failed<T extends string[]>(reason: T): FailedResponseSchema {
//     return Type.Object({
//         command: Type.Literal(""),
//         status: Type.Literal("failed"),
//         reason: Type.Union([Type.Literal("internal_error"), ...reason.map((r) => Type.Literal(r))]),
//     });
// }
