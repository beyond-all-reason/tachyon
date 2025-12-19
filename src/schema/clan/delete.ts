import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Delete your clan.",
    request: {
        data: Type.Object({
            user: Type.Ref("user"),
            clan: Type.Ref("clan"),
        }),
    },
    response: [{ status: "success" }],
});
