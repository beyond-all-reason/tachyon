import Type from "typebox";

export const clan = Type.Intersect(
    [
        Type.Ref("clanId"),
        Type.Ref("clanUpdateableData"),
        Type.Object({
            members: Type.Array(Type.Ref("clanMember")),
        }),
    ],
    { $id: "clan" }
);
