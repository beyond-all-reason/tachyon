import { UnionEnum } from "@/union-enum";

export const startPosType = UnionEnum(["fixed", "random", "ingame", "beforegame"], { $id: "startPosType" });
