import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Create a party.",
    request: {},
    response: [
        {
            status: "success",
            data: Type.Object({
                partyId: Type.Ref("partyId"),
            }),
        },
    ],
});
