import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Create a lobby",
    request: {
        data: Type.Object({
            name: Type.String(),
            mapName: Type.String(),
            allyTeamConfig: Type.Ref("allyTeamConfig"),
            areBossesEnabled: Type.Optional(Type.Boolean({ default: true })),
            gameOptions: Type.Optional(
                Type.Record(
                    Type.String(),
                    Type.Object({
                        value: Type.String(),
                    })
                )
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
