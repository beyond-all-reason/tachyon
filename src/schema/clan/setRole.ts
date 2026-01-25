import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Set the target player's role in your clan.",
    request: {
        data: Type.Object({
            userId: Type.Ref("userId"),
            clanId: Type.Ref("clanId"),
            targetRole: Type.Ref("clanRole"),
        }),
    },
    response: [{ status: "success" }],
});
