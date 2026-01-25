import { Type } from "@sinclair/typebox";

export const clan = Type.Intersect(
    [
        Type.Ref("clanId"),
        Type.Ref("clanUpdateableData"),
        Type.Object({
            membersCount: Type.Number({ minimum: 0 }),
            members: Type.Array(Type.Ref("clanMember")),
        }),
    ],
    { $id: "clan" }
);
