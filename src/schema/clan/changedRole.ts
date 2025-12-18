import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "The role of a clan member has changed. Sent to the affected player.",
    event: {
        data: Type.Object({
            userId: Type.Ref("userId"),
            clanId: Type.Ref("clanId"),
            role: Type.Ref("clanRole"),
        }),
    },
});
