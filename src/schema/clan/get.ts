import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Get information about a clan.",
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
        { status: "failed", reason: "clan_does_not_exist" },
    ],
});
