import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Create a lobby",
    request: {
        data: Type.Object({
            name: Type.String(),
            mapName: Type.String(),
            allyTeamConfig: Type.Array(
                Type.Object(
                    {
                        maxTeams: Type.Integer({ minimum: 1 }),
                        startBox: Type.Ref("startBox"),
                        teams: Type.Array(
                            Type.Object({
                                maxPlayers: Type.Integer({ minimum: 1 }),
                            })
                        ),
                    },
                    { description: "config for this ally team" }
                ),
                { description: "each object describes an ally team" }
            ),
        }),
    },
    response: [
        {
            status: "success",
            data: Type.Ref("lobbyDetails"),
        },
    ],
});
