import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    description:
        "When an autohost client receives this response it should launch the game server (spring-dedicated.exe or spring-headless.exe) with the start script.",
    response: [
        {
            status: "success",
            data: Type.Object({
                script: Type.String(),
            }),
        },
    ],
});
