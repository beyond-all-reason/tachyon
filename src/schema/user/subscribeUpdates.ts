import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description:
        "Ask the server to send updates about theses users. A maximum of 100 userIds can be subscribed to at any given time.",
    request: {
        data: Type.Object({
            userIds: Type.Array(Type.Ref("userId"), { minItems: 1, maxItems: 100 }),
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
