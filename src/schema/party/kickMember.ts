import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Kick the target player from the party",
    request: {
        data: Type.Object({
            userId: Type.Ref(userId),
        }),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "not_in_party" },
        { status: "failed", reason: "target_not_in_party" },
    ],
});
