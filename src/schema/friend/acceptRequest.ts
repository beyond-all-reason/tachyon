import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Accept an incoming friend request",
    request: {
        data: Type.Object({
            from: Type.Ref("userId"),
        }),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "invalid_user" },
        { status: "failed", reason: "no_pending_request" },
    ],
});
