import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "cancel a pending invite for the given player",
    request: {
        data: Type.Object({
            userId: Type.Ref("userId"),
        }),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "not_in_party" },
        { status: "failed", reason: "invalid_invite" },
    ],
});
