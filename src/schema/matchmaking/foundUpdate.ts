import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Server should send this when players ready up using [ready](#ready).",
    event: {
        data: Type.Object({
            readyCount: Type.Integer(),
        }),
    },
});
