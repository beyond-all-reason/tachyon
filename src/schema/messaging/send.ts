import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Send a simple message to the given target.",
    request: {
        data: Type.Object({
            target: Type.Union([
                Type.Object({
                    type: Type.Literal("player"),
                    userId: Type.Ref(userId),
                }),
            ]),
            // somewhat arbitrary maxLength, but we need one
            message: Type.String({ maxLength: 512 }),
        }),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "message_too_long" },
        { status: "failed", reason: "invalid_target" },
    ],
});
