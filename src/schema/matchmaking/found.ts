import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "Server should send this when there are enough queued players to form a valid game that meets their criteria. Clients should then send [ready](#ready).",
    event: {
        data: Type.Object({
            queueId: Type.String(),
            timeoutMs: Type.Integer(),
        }),
    },
});
