import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Remove a player from your friendlist",
    request: {
        data: Type.Object({
            userId: Type.Ref(userId),
        }),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "invalid_user" },
        { status: "failed", reason: "not_in_friendlist" },
    ],
});
