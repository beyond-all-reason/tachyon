import Type from "typebox";

export const voteActions = Type.Union(
    [
        Type.Object({ type: Type.Literal("start") }),
        Type.Object({ type: Type.Literal("changeMap"), newMapName: Type.String() }),
        Type.Object({ type: Type.Literal("appointBoss"), bossId: Type.Ref("userId") }),
        Type.Object({
            type: Type.Literal("kickban"),
            userId: Type.Ref("userId"),
            banUntil: Type.Optional(Type.Ref("unixTime")),
        }),
    ],
    { $id: "voteActions" }
);
