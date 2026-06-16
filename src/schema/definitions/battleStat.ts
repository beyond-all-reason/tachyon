import Type from "typebox";

export const battleStat = Type.Object(
    {
        matchId: Type.String(),
        map: Type.String(),
        playersCount: Type.Integer(),
        type: Type.Enum(["small_team", "large_team", "duel", "team", "ffa"]),
        outcome: Type.Enum(["win", "loss", "draw"]),
        rating: Type.String(),
        ratingChange: Type.String(),
        duration: Type.String(),
        datetime: Type.Ref("unixTime"),
    },
    { $id: "battleStat" }
);
