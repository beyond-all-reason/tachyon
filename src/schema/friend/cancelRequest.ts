import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Cancel an invite sent to someone",
    request: {
        data: Type.Object({
            to: Type.Ref(userId),
        }),
    },
    response: [{ status: "success" }, { status: "failed", reason: "invalid_user" }],
});
