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
            // makes no sense to clear some properties. For example, a map
            // must always be set.
            bossId: Type.Optional(Type.Ref("userId")),
            name: Type.Optional(Type.String()),
            mapName: Type.Optional(Type.String()),
            engineVersion: Type.Optional(Type.String()),
            gameVersion: Type.Optional(Type.String()),
            mods: Type.Optional(
                Type.Array(Type.Ref("mod"), {
                    description:
                        "Ordered list of mods. Order matters - later mods override earlier ones.",
                    maxItems: 10,
                })
            ),
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
            players: Type.Optional(
                Type.Record(
                    // this is a userId, but using Type.Ref("userId") leads to a schema with only: `not: {}`
                    Type.String(),
                    Nullable(
                        Type.Object({
                            id: Type.Ref("userId"),
                            allyTeam: Type.Optional(Type.String()),
                            team: Type.Optional(Type.String()),
                            player: Type.Optional(Type.String()),
                            sync: Type.Optional(Type.Ref("memberSyncStatus")),
                        })
                    )
                )
            ),
            spectators: Type.Optional(
                Type.Record(
                    // this is a userId, but using Type.Ref("userId") leads to a schema with only: `not: {}`
                    Type.String(),
                    Nullable(
                        Type.Object({
                            id: Type.Ref("userId"),
                            joinQueuePosition: Type.Optional(Nullable(Type.Number())),
                            sync: Type.Optional(Type.Ref("memberSyncStatus")),
                        })
                    )
                )
            ),
            bots: Type.Optional(
                Type.Record(
                    Type.String(),
                    Nullable(
                        Type.Object({
                            id: Type.String(),
                            hostUserId: Type.Optional(Type.Ref("userId")),
                            allyTeam: Type.Optional(Type.String()),
                            team: Type.Optional(Type.String()),
                            player: Type.Optional(Type.String()),
                            name: Type.Optional(
                                Nullable(
                                    Type.String({ description: "name to display in the lobby" })
                                )
                            ),
                            shortName: Type.Optional(
                                Type.String({
                                    description:
                                        "Short name of the bot. Used to uniquely identify which bot to run",
                                })
                            ),
                            version: Nullable(Type.Optional(Type.String())),
                            options: Nullable(
                                Type.Optional(Type.Record(Type.String(), Nullable(Type.String())))
                            ),
                        })
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
