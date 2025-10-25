import { Type } from "@sinclair/typebox";

export const lobbyDetails = Type.Object(
    {
        id: Type.String(),
        bossId: Type.Ref("userId", {
            description:
                "User ID of the lobby boss (creator). Boss can change lobby settings like mods.",
        }),
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
        mods: Type.Array(Type.Ref("mod"), {
            description:
                "Ordered list of mods/mutators to apply. Order matters - later mods override earlier ones.",
            maxItems: 10,
        }),
        players: Type.Record(
            Type.String(), // userId, using Type.Ref() generates a schema with only not: {}
            Type.Union([
                Type.Object({
                    id: Type.Ref("userId"),
                    allyTeam: Type.String(),
                    team: Type.String(),
                    player: Type.String(),
                    sync: Type.Optional(
                        Type.Ref("memberSyncStatus", {
                            description: "Tracks which resources this member has downloaded",
                        })
                    ),
                }),
                Type.Object({
                    type: Type.Const("spec"),
                    id: Type.Ref("userId"),
                    joinQueuePosition: Type.Optional(Type.Number()),
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
