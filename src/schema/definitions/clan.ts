import Type from "typebox";

export const clan = Type.Intersect(
    [
        Type.Ref("clanBaseData"),
        Type.Object({
            membersCount: Type.Number({ minimum: 0 }),
            members: Type.Array(Type.Ref("clanMember")),
        }),
    ],
    { $id: "clan" }
);
