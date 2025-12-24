import { Type } from "@sinclair/typebox";

export const voteActions = Type.Union(
    [
        Type.Object({ type: Type.Const("start") }),
        Type.Object({ type: Type.Const("changeMap"), newMapName: Type.String() }),
    ],
    { $id: "voteActions" }
);
