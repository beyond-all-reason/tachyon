import { Type } from "@sinclair/typebox";

export const clanBaseData = Type.Object(
    {
        clanId: Type.Ref("clanId"),
        name: Type.String({ maxLength: 30 }),
        tag: Type.String({ minLength: 3, maxLength: 6 }),
        description: Type.Optional(Type.String({ maxLength: 500 })),
    },
    { $id: "clanBaseData" }
);
