import { Type } from "@sinclair/typebox";

export const lobbyDetails = Type.Object(
    {
        id: Type.String(),
        mapName: Type.String(),
        engineVersion: Type.String(),
        gameVersion: Type.String(),
        allyTeams: Type.Record(
            Type.String(),
            Type.Object(
                {
                    startBox: Type.Ref("startBox"),
                    teams: Type.Record(
                        Type.String(),
                        Type.Object({
                            players: Type.Record(
                                Type.String(),
                                Type.Object({
                                    id: Type.Ref("userId"),
                                })
                            ),
                        })
                    ),
                },
                {
                    description:
                        "this represent an array, items should be sorted lexicographically on their keys",
                }
            )
        ),
        currentBattle: Type.Optional(
            Type.Object(
                {
                    id: Type.String(),
                    startedAt: Type.Ref("unixTime"),
                },
                { description: "If a battle is currently happening, here are the info" }
            )
        ),
    },
    { description: "The full state of a lobby", $id: "lobbyDetails" }
);
