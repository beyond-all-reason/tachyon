import Type from "typebox";

export const clan = Type.Intersect(
    [
        Type.Ref("clanBaseData"),
        Type.Object({
            members: Type.Array(Type.Ref("clanMember")),
        }),
    ],
    { $id: "clan" }
);
