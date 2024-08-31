import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Cancel queueing for matchmaking.",
    request: {
        data: Type.Object({
            queueId: Type.String(),
        }),
    },
    response: [{ status: "success" }, { status: "failed", reason: "not_queued" }],
});
