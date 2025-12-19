import { Type } from "@sinclair/typebox";

export const clanMember = Type.Object(
    {
        user: Type.Ref("user"),
        clanId: Type.Ref("clanId"),
        role: Type.Ref("clanRole"),
    },
    { $id: "clanMember" }
);
