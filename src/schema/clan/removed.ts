import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "A clan was removed. Sent to all clan members.",
    event: {
        data: Type.Object({
            clanId: Type.Ref("clanId"),
        }),
    },
});
