import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description:
        "Ask the server to send updates about lobby list, can be filtered. Subscribing again with the same filters has no effect. Subscribing again with different filters replaces the current ones, and the server sends a lobby/listReset event with the lobbies matching the new filters.",
    request: {
        data: Type.Optional(
            Type.Object({
                filters: Type.Optional(
                    Type.Object({
                        hasFriend: Type.Optional(
                            Type.Boolean({
                                description:
                                    "At least one of the user's friends is a member (player or spectator) of the lobby",
                            })
                        ),
                        hasPartyMember: Type.Optional(
                            Type.Boolean({
                                description:
                                    "At least one member of the user's party is a member (player or spectator) of the lobby",
                            })
                        ),
                        mapNames: Type.Optional(
                            Type.Array(Type.String({ description: "Map name to include" }))
                        ),
                        playerCount: Type.Optional(
                            Type.Object({
                                min: Type.Optional(
                                    Type.Number({
                                        minimum: 0,
                                        description: "Minimum player count, inclusive",
                                    })
                                ),
                                max: Type.Optional(
                                    Type.Number({
                                        minimum: 1,
                                        description: "Maximum player count, inclusive",
                                    })
                                ),
                            })
                        ),
                        allyTeams: Type.Optional(
                            Type.Object({
                                min: Type.Optional(
                                    Type.Number({
                                        minimum: 1,
                                        description: "Minimum number of AllyTeams, inclusive",
                                    })
                                ),
                                max: Type.Optional(
                                    Type.Number({
                                        minimum: 1,
                                        description: "Maximum number of AllyTeams, inclusive",
                                    })
                                ),
                            })
                        ),
                        name: Type.Optional(
                            Type.String({
                                minLength: 1,
                                maxLength: 100,
                                description:
                                    "The lobby name must contain this string, case insensitive",
                            })
                        ),
                        tags: Type.Optional(
                            Type.Array(
                                Type.String({
                                    description: "Lobbies contain at least one of these tags",
                                })
                            )
                        ),
                        isBattleInProgress: Type.Optional(
                            Type.Boolean({ description: "A battle is currently running" })
                        ),
                        areBossesEnabled: Type.Optional(
                            Type.Boolean({ description: "Lobby bosses are enabled" })
                        ),
                        engineVersions: Type.Optional(
                            Type.Array(Type.String({ description: "Engine version to include" }))
                        ),
                        gameVersions: Type.Optional(
                            Type.Array(Type.String({ description: "Game version to include" }))
                        ),
                    })
                ),
            })
        ),
    },
    response: [
        {
            status: "success",
        },
    ],
});
