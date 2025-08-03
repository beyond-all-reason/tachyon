import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Accept the invite to the party",
    request: {
        data: Type.Object({
            partyId: Type.Ref("partyId"),
        }),
    },
    response: [{ status: "success" }],
});
