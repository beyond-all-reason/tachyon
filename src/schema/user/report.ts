import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Issue a single moderation report on one or more users.",
    request: {
        data: Type.Object({
            userIds: Type.Array(Type.Ref("userId")),
            reason: Type.Ref("moderationType"),
            message: Type.Optional(Type.String()),
        }),
    },
    response: [
        {
            status: "success",
        },
        {
            status: "failed",
            reason: "unknown_user",
        },
    ],
});
