import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { Nullable } from "@/typebox-utils";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "Sent by the server whenever something in the lobby changes. Uses json patch (RFC-7386)",
    event: {
        data: Type.Object({
            id: Type.String(),
            // not all types are nullable because in the context of lobbies, it
            // makes no sense to clear some propreties. For example, a map
            // must always be set.
            name: Type.Optional(Type.String()),
            mapName: Type.Optional(Type.String()),
            engineVersion: Type.Optional(Type.String()),
            gameVersion: Type.Optional(Type.String()),
            allyTeams: Type.Optional(
                Type.Record(
                    Type.String(),
                    Type.Optional(
                        Nullable(
                            Type.Object(
                                {
                                    startBox: Type.Optional(Type.Ref("startBox")),
                                    maxTeams: Type.Optional(Type.Integer({ minimum: 1 })),
                                    teams: Type.Record(
                                        Type.String(),
                                        Type.Optional(
                                            Nullable(
                                                Type.Object({
                                                    maxPlayers: Type.Optional(
                                                        Type.Integer({ minimum: 1 })
                                                    ),
                                                })
                                            )
                                        )
                                    ),
                                },
                                {
                                    description:
                                        "this represent an array, items should be sorted lexicographically on their keys",
                                }
                            )
                        )
                    )
                )
            ),
            members: Type.Optional(
                Type.Record(
                    // this is a userId, but using Type.Ref("userId") leads to a schema with only: `not: {}`
                    Type.String(),
                    Nullable(
                        Type.Union([
                            Type.Object({
                                type: Type.Const("player"),
                                id: Type.Ref("userId"),
                                allyTeam: Type.Optional(Type.String()),
                                team: Type.Optional(Type.String()),
                                player: Type.Optional(Type.String()),
                            }),
                            Type.Object({
                                type: Type.Const("spec"),
                                id: Type.Ref("userId"),
                                queuePosition: Type.Optional(Type.Number()),
                            }),
                        ])
                    )
                )
            ),
            currentBattle: Type.Optional(
                Nullable(
                    Type.Object(
                        {
                            id: Type.String(),
                            startedAt: Type.Ref("unixTime"),
                        },
                        { description: "If a battle is currently happening, here are the info" }
                    )
                )
            ),
        }),
    },
});
