import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Invite the target player to your clan.",
    request: {
        data: Type.Object({
            userId: Type.Ref("userId"),
        }),
    },
    response: [{ status: "success" }],
});
