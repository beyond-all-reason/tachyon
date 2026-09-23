import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Issue a single moderation report on one or more users.",
    request: {
        data: Type.Object({
            userIds: Type.Array(Type.Ref("userId"), { minItems: 1 }),
            reason: Type.Object({ type: Type.String() }),
            message: Type.Optional(Type.String({ maxLength: 255 })),
            matchId: Type.Optional(
                Type.Ref("matchId", { description: "the match the report is about, if any" })
            ),
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
