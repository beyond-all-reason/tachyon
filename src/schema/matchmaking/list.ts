import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/schema-helpers";

export default defineEndpoint({
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
                            ranked: Type.Boolean(),
                            teamSize: Type.Integer(),
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
                                    ranked: true,
                                    teamSize: 1,
                                },
                                {
                                    id: "2v2",
                                    name: "2v2",
                                    ranked: true,
                                    teamSize: 2,
                                },
                            ],
                        },
                    ],
                }
            ),
        },
    ],
});
