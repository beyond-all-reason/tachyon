import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    description: "Ask the server to terminate the connection.",
    request: {
        data: Type.Optional(
            Type.Object({
                reason: Type.String(), // TODO: add some common literals
            })
        ),
    },
    response: [{ status: "success" }],
});
