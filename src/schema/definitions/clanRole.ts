import Type, { Enum } from "typebox";

export const clanRole = Enum(["member", "coLeader", "leader"], { $id: "clanRole" });
