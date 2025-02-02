import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Returns all available matchmaking playlists.",
    request: {},
    response: [
        {
            status: "success",
            data: Type.Object(
                {
                    playlists: Type.Array(
                        Type.Object({
                            id: Type.String(),
                            name: Type.String(),
                            numOfTeams: Type.Integer(),
                            teamSize: Type.Integer(),
                            ranked: Type.Boolean(),
                            engines: Type.Array(
                                Type.Object({
                                    version: Type.String(),
                                })
                            ),
                            games: Type.Array(
                                Type.Object({
                                    springName: Type.String(),
                                })
                            ),
                            maps: Type.Array(
                                Type.Object({
                                    springName: Type.String(),
                                })
                            ),
                        })
                    ),
                },
                {
                    examples: [
                        {
                            playlists: [
                                {
                                    id: "1v1",
                                    name: "Duel",
                                    numOfTeams: 2,
                                    teamSize: 1,
                                    ranked: true,
                                    engines: [{ version: "2025.01.6" }],
                                    games: [{ springName: "Beyond All Reason test-27414-a84d7e6" }],
                                    maps: [
                                        { springName: "Theta Crystals 1.3" },
                                        { springName: "Comet Catcher Remake 1.8" },
                                        { springName: "Aurelia v4.1" },
                                    ],
                                },
                                {
                                    id: "1v1v1",
                                    name: "3 Way FFA",
                                    numOfTeams: 3,
                                    teamSize: 1,
                                    ranked: true,
                                    engines: [{ version: "2025.01.6" }],
                                    games: [{ springName: "Beyond All Reason test-27414-a84d7e6" }],
                                    maps: [{ springName: "Ghenna Rising 4.0.1" }],
                                },
                            ],
                        },
                    ],
                }
            ),
        },
    ],
});
