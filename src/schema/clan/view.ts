import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Get information about a clan.",
    request: {
        data: Type.Object({
            clanId: Type.Ref("clanId"),
            members: Type.Array(Type.Ref("user")),
        }),
    },
    response: [
        {
            status: "success",
            data: Type.Ref("clan"),
        },
    ],
});
