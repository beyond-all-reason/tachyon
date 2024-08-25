import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Queue up for matchmaking on the specific queue id.",
    request: {
        data: Type.Object({
            queue: Type.String(),
        }),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "invalid_queue_specified" },
        { status: "failed", reason: "already_queued" },
        { status: "failed", reason: "already_inbattle" },
    ],
});
