import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Decline an invite to a clan.",
    request: {
        data: Type.Object({
            clanId: Type.Ref("clanId"),
        }),
    },
    response: [{ status: "success" }],
});
