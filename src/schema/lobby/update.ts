import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Update some properties of the lobby the player is in.",
    request: {
        data: Type.Object({
            name: Type.Optional(Type.String({ description: "to rename the lobby" })),
            mapName: Type.Optional(Type.String()),
            allyTeamConfig: Type.Optional(Type.Ref("allyTeamConfig")),
        }),
    },
    response: [{ status: "success" }],
});
