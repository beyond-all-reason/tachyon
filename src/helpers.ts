import { TObject, TUnion, Type } from "@sinclair/typebox";

export type Endpoint =
    | {
          request: TObject | TUnion<TObject[]>;
      }
    | {
          response: TUnion<TObject[]>;
      };

export function defineResponses<T extends TObject[]>(responses: T) {
    return Type.Union([
        ...responses,
        Type.Object({
            command: Type.Literal(""),
            status: Type.Literal("failed"),
            reason: Type.Literal("internal_error"),
        }),
    ]);
}

export function success<T extends TObject>(data?: T) {
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

export function failed<T extends string[]>(reason: T) {
    return Type.Object({
        command: Type.Literal(""),
        status: Type.Literal("failed"),
        reason: Type.Union(reason.map((r) => Type.Literal(r))),
    });
}
