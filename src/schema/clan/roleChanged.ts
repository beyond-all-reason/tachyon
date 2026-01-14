import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "A clan member's role was changed. Sent to affected clan member.",
    event: {
        data: Type.Object({
            userId: Type.Ref("userId"),
            newRole: Type.Ref("clanRole"),
        }),
    },
});
