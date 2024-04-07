import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    description: "Contains some info about the state of the current queue.",
    response: [
        {
            status: "success",
            data: Type.Object({
                playersQueued: Type.String(),
            }),
        },
    ],
});
