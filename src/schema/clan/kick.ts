import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Kick a member from your clan.",
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
        { status: "failed", reason: "user_not_in_clan" },
        { status: "failed", reason: "cannot_kick_self" },
        { status: "failed", reason: "cannot_kick_leader" },
        { status: "failed", reason: "user_not_available" },
    ],
});
