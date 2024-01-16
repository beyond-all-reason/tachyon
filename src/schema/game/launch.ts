import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/schema-helpers";

export default defineEndpoint({
    description:
        "When a client receives this response it should launch the game with the start script.",
    response: [
        {
            status: "success",
            data: Type.Object({
                script: Type.String(),
            }),
        },
    ],
});
