import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Notify the player a message has been received",
    event: {
        data: Type.Object({
            message: Type.String(),
            source: Type.Union([
                Type.Object({
                    type: Type.Literal("player"),
                    player_id: Type.String(),
                }),
            ]),
        }),
    },
});
