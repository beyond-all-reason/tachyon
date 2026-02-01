import Type from "typebox";

export const clan = Type.Intersect(
    [
        Type.Ref("clanBaseData"),
        Type.Ref("clanUpdateableBaseData"),
        Type.Object({
            membersCount: Type.Number({ minimum: 0 }),
            members: Type.Array(Type.Ref("clanMember")),
        }),
    ],
    { $id: "clan" }
);
