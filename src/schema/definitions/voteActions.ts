import Type from "typebox";

export const voteActions = Type.Union(
    [
        Type.Object({ type: Type.Literal("start") }),
        Type.Object({ type: Type.Literal("changeMap"), newMapName: Type.String() }),
        Type.Object({ type: Type.Literal("appointBoss"), bossId: Type.Ref("userId") }),
    ],
    { $id: "voteActions" }
);
