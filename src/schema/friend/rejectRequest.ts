import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Reject a friend request",
    request: {
        data: Type.Object({
            from: Type.Ref(userId),
        }),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "invalid_user" },
        { status: "failed", reason: "no_pending_request" },
    ],
});
