import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Leave your clan.",
    request: {
        data: Type.Object({
            userId: Type.Ref("userId"),
            clanId: Type.Ref("clanId"),
        }),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "no_member" },
        { status: "failed", reason: "permission_denied" },
        { status: "failed", reason: "clan_not_found" },
    ],
});
