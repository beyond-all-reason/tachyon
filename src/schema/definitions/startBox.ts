import { Type } from "@sinclair/typebox";

export const startBox = Type.Object(
    {
        top: Type.Number({ minimum: 0, maximum: 1 }),
        bottom: Type.Number({ minimum: 0, maximum: 1 }),
        left: Type.Number({ minimum: 0, maximum: 1 }),
        right: Type.Number({ minimum: 0, maximum: 1 }),
    },
    { $id: "startBox" }
);
