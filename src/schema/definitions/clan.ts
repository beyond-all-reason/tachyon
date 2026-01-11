import { Type } from "@sinclair/typebox";

export const clan = Type.Intersect(
    [
        Type.Ref("clanBaseData"),
        Type.Object({
            description: Type.Optional(Type.String({ maxLength: 500 })),
            membersCount: Type.Number({ minimum: 0 }),
            members: Type.Array(Type.Ref("clanMember")),
        }),
    ],
    { $id: "clan" }
);
