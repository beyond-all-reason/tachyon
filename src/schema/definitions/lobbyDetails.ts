import { Type } from "@sinclair/typebox";

import { UnionEnum } from "@/union-enum";

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
        players: Type.Record(
            Type.String(), // userId, using Type.Ref() generates a schema with only not: {}
            Type.Object({
                id: Type.Ref("userId"),
                allyTeam: Type.String(),
                team: Type.String(),
                player: Type.String(),
            })
        ),
        spectators: Type.Record(
            Type.String(), // userId, using Type.Ref() generates a schema with only not: {}
            Type.Object({
                id: Type.Ref("userId"),
                joinQueuePosition: Type.Optional(Type.Number()),
            })
        ),
        bots: Type.Record(
            Type.String(),
            Type.Object({
                id: Type.String({ description: "server assigned unique identifier for the bot" }),
                hostUserId: Type.Ref("userId", {
                    description:
                        "which player will run the bot. It is the same as the player that added the bot.",
                }),
                allyTeam: Type.String(),
                team: Type.String(),
                player: Type.String(),
                name: Type.Optional(
                    Type.String({ maxLength: 20, description: "name to display in the lobby" })
                ),
                shortName: Type.String({
                    maxLength: 20,
                    description:
                        "short name of the bot. Used to uniquely identify which bot to run",
                }),
                version: Type.Optional(Type.String()),
                options: Type.Optional(Type.Record(Type.String(), Type.String())),
            })
        ),
        currentBattle: Type.Optional(
            Type.Object(
                {
                    startedAt: Type.Ref("unixTime"),
                },
                { description: "If a battle is currently happening, here are the info" }
            )
        ),
        currentVote: Type.Optional(
            Type.Object({
                id: Type.String(),
                message: Type.String({
                    description: "Human readable message about what is the vote for?",
                }),
                initiator: Type.Ref("userId"),
                voters: Type.Record(
                    Type.String(), // this is the userId
                    Type.Object({ vote: UnionEnum(["pending", "yes", "no", "abstain"]) }),
                    {
                        description:
                            "indexed by the userId. The initiator is also included in this object",
                    }
                ),
                until: Type.Ref("unixTime"),
            })
        ),
    },
    { description: "The full state of a lobby", $id: "lobbyDetails" }
);
