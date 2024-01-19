import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers";

export default defineEndpoint({
    description:
        "When a client receives this response it should launch the game (spring.exe) with the start script.",
    response: [
        {
            status: "success",
            data: Type.Object({
                script: Type.String(),
            }),
        },
    ],
});
