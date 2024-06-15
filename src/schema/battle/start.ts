import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "When a user client receives this response it should launch the game (spring.exe) with the start script.",
    request: {
        data: Type.Object({
            username: Type.String(),
            password: Type.String(),
            ip: Type.String(),
            port: Type.Number(),
        }),
    },
    response: [
        {
            status: "success",
        },
    ],
});
