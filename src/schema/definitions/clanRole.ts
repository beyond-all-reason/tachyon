import { UnionEnum } from "@/union-enum";

export const clanRole = UnionEnum(["member", "coLeader", "leader"], { $id: "clanRole" });
