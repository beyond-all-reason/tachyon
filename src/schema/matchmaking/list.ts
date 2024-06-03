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
                                },
                                {
                                    id: "1v1v1",
                                    name: "3 Way FFA",
                                    numOfTeams: 3,
                                    teamSize: 1,
                                    ranked: true,
                                },
                            ],
                        },
                    ],
                }
            ),
        },
    ],
});
