import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "server",
    target: "autohost",
    description: "Mute a player in a battle.",
    request: {
        data: Type.Object({
            battleId: Type.String({ format: "uuid" }),
            userId: Type.Ref(userId),
            chat: Type.Boolean(),
            draw: Type.Boolean(),
        }),
    },
    response: [
        {
            status: "success",
        },
    ],
});
