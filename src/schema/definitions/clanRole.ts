import { Type } from "@sinclair/typebox";

export const clanRole = Type.Enum(
    {
        Member: "member",
        CoLeader: "coLeader",
        Leader: "leader",
    },
    { $id: "clanRole" }
);
