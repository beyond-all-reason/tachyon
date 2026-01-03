import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Get detailed information about a clan.",
    request: {
        data: Type.Object({
            clanId: Type.Ref("clanId"),
        }),
    },
    response: [
        {
            status: "success",
            data: Type.Ref("clan"),
        },
    ],
});
