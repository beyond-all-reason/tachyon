import { Type } from "@sinclair/typebox";

export const startBox = Type.Object(
    {
        top: Type.Integer({ minimum: 0, maximum: 200 }),
        bottom: Type.Integer({ minimum: 0, maximum: 200 }),
        left: Type.Integer({ minimum: 0, maximum: 200 }),
        right: Type.Integer({ minimum: 0, maximum: 200 }),
    },
    { $id: "startBox" }
);
