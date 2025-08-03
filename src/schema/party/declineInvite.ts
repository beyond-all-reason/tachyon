import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Decline the invite to a party",
    request: {
        data: Type.Object({
            partyId: Type.Ref("partyId"),
        }),
    },
    response: [{ status: "success" }],
});
