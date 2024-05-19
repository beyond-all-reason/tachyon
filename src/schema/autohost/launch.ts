import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "autohost",
    description: "Tell the autohost client to launch the game server (spring-dedicated.exe or spring-headless.exe) with the given script data.",
    request: {
        data: Type.Object({
            script: Type.String(),
        }),
    },
    response: [
        {
            status: "success",
        },
        {
            status: "failed",
            reason: "invalid_script",
        },
        {
            status: "failed",
            reason: "server_already_running",
        },
        {
            status: "failed",
            reason: "server_failed_to_start",
        },
    ],
});
