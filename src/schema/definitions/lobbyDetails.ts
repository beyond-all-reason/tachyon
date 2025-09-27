import { Type } from "@sinclair/typebox";

export const lobbyDetails = Type.Object(
    {
        id: Type.String(),
        name: Type.String(),
        mapName: Type.String(),
        engineVersion: Type.String(),
        gameVersion: Type.String(),
        allyTeamConfig: Type.Record(
            Type.String(),
            Type.Object(
                {
                    startBox: Type.Ref("startBox"),
                    maxTeams: Type.Integer({ minimum: 1 }),
                    teams: Type.Record(
                        Type.String(),
                        Type.Object({
                            maxPlayers: Type.Integer({ minimum: 1 }),
                        })
                    ),
                },
                {
                    description:
                        "this represent an array, items should be sorted lexicographically on their keys",
                }
            )
        ),
        members: Type.Record(
            Type.String(), // userId, using Type.Ref() generates a schema with only not: {}
            Type.Union([
                Type.Object({
                    type: Type.Const("player"),
                    id: Type.Ref("userId"),
                    allyTeam: Type.String(),
                    team: Type.String(),
                    player: Type.String(),
                }),
                Type.Object({
                    type: Type.Const("spec"),
                    id: Type.Ref("userId"),
                    queuePosition: Type.Number(),
                }),
            ])
        ),
        currentBattle: Type.Optional(
            Type.Object(
                {
                    startedAt: Type.Ref("unixTime"),
                },
                { description: "If a battle is currently happening, here are the info" }
            )
        ),
    },
    { description: "The full state of a lobby", $id: "lobbyDetails" }
);
