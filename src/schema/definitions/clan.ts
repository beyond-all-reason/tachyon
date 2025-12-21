import { Type } from "@sinclair/typebox";

export const clan = Type.Object(
    {
        clanId: Type.Ref("clanId"),
        tag: Type.String({ minLength: 3, maxLength: 6 }),
        name: Type.String({ maxLength: 30 }),
        description: Type.Optional(Type.String({ maxLength: 500 })),
        clanMembers: Type.Array(Type.Ref("clanMember")),
    },
    { $id: "clan" }
);
