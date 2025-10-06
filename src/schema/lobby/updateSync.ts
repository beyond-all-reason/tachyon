import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description:
        "Report the member's sync status - which resources they have downloaded and are ready to use.",
    request: {
        data: Type.Object({
            lobbyId: Type.String(),
            sync: Type.Ref("memberSyncStatus"),
        }),
    },
    response: [
        { status: "failed", reason: "not_in_lobby" },
        {
            status: "success",
        },
    ],
});
