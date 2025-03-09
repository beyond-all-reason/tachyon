import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "invite the target player to your current party",
    request: {
        data: Type.Object({
            userId: Type.Ref(userId),
        }),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "not_in_party" },
        { status: "failed", reason: "invalid_user" },
        { status: "failed", reason: "party_full" },
    ],
});
