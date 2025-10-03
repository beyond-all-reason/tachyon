import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Contains some info about the state of the current queue.",
    event: {
        data: Type.Object({
            playersQueued: Type.Integer(),
        }),
    },
});
