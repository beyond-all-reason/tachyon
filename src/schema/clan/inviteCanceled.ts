import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "The invitation to a clan has been canceled. Sent to the invited player.",
    event: {
        data: Type.Object({
            userId: Type.Ref("userId"),
            clanId: Type.Ref("clanId"),
        }),
    },
});
