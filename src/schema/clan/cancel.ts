import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Cancel an invite to your clan.",
    request: {
        data: Type.Object({
            userId: Type.Ref("userId"),
            clanId: Type.Ref("clanId"),
        }),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "clan_not_available" },
        { status: "failed", reason: "user_not_available" },
        { status: "failed", reason: "no_permission" },
        { status: "failed", reason: "already_member" },
    ],
});
