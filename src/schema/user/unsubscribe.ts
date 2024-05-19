import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Unsubscribe from user updates.",
    request: {
        data: Type.Object({
            userIds: Type.Array(Type.String()),
        }),
    },
    response: [
        {
            status: "success",
        },
        {
            status: "failed",
            reason: "cannot_unsub_own_user",
        },
    ],
});
