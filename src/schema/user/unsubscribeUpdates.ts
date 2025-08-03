import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description:
        "Ask the server to stop sending user updates for the given set of userId. This should always succeed.",
    request: {
        data: Type.Object({
            userIds: Type.Array(Type.Ref("userId"), { minItems: 1, maxItems: 100 }),
        }),
    },
    response: [
        {
            status: "success",
        },
    ],
});
