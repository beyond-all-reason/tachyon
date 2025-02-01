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
                            engine: Type.Object({
                                version: Type.String(),
                            }),
                            game: Type.Object({
                                version: Type.String(),
                            }),
                            data: Type.Object({
                                mapPool: Type.Array(Type.Object({ id: Type.String() })),
                            }),
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
                                    engine: { version: "2025.01.6" },
                                    game: { version: "Beyond All Reason test-27414-a84d7e6" },
                                    data: {
                                        mapPool: [
                                            { id: "Theta Crystals 1.3" },
                                            { id: "Comet Catcher Remake 1.8" },
                                            { id: "Aurelia v4.1" },
                                        ],
                                    },
                                },
                                {
                                    id: "1v1v1",
                                    name: "3 Way FFA",
                                    numOfTeams: 3,
                                    teamSize: 1,
                                    ranked: true,
                                    engine: { version: "2025.01.6" },
                                    game: { version: "Beyond All Reason test-27414-a84d7e6" },
                                    data: {
                                        mapPool: [{ id: "Ghenna Rising 4.0.1" }],
                                    },
                                },
                            ],
                        },
                    ],
                }
            ),
        },
    ],
});
