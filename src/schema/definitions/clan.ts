import { Type } from "@sinclair/typebox";

export const clan = Type.Object(
    {
        clanId: Type.Ref("clanId"),
        tag: Type.String({ minLength: 3, maxLength: 6 }),
        name: Type.String(),
        description: Type.Optional(Type.String()),
    },
    { $id: "clan" }
);
