import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Ask the server to send updates about theses users.",
    request: {
        data: Type.Object({
            userIds: Type.Array(userId, { minItems: 1, maxItems: 100 }),
        }),
    },
    response: [
        {
            status: "success",
        },
        {
            status: "failed",
            reason: "subscription_limit_reached",
        },
    ],
});
