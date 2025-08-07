import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description:
        "Start the battle for the lobby. If this request succeed players will receive a battle/start request.",
    request: {
        data: Type.Object({
            id: Type.String(),
        }),
    },
    response: [
        {
            status: "success",
        },
    ],
});
