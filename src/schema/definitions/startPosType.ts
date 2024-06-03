import { Type } from "@sinclair/typebox";

enum StartPosType {
    Fixed = 0,
    Random = 1,
    Boxes = 2,
}
export const startPosType = Type.Enum(StartPosType, { $id: "startPosType" });
