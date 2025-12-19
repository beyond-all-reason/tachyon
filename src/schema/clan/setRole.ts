import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Set the target player's role in your clan.",
    request: {
        data: Type.Object({
            clan: Type.Ref("clan"),
            clanMember: Type.Ref("clanMember"),
            targetRole: Type.Ref("clanRole"),
        }),
    },
    response: [{ status: "success" }],
});
