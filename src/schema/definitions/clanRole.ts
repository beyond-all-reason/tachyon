import { Type } from "@sinclair/typebox";

export const clan = Type.Enum(
    {
        Member: "member",
        CoLeader: "coLeader",
        Leader: "leader",
    },
    { $id: "clanRole" }
);
