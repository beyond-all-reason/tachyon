import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Leave your clan.",
    request: {
        data: Type.Object({
            user: Type.Ref("user"),
        }),
    },
    response: [{ status: "success" }],
});
