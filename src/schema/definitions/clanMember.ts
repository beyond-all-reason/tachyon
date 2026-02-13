import Type from "typebox";

export const clanMember = Type.Object(
    {
        userId: Type.Ref("userId"),
        role: Type.Ref("clanRole"),
        joinedAt: Type.Ref("unixTime"),
    },
    { $id: "clanMember" }
);
