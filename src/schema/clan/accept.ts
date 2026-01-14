import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Accept an invite to a clan.",
    request: {
        data: Type.Object({
            clanId: Type.Ref("clanId"),
        }),
    },
    response: [{ status: "success" }],
});
