import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
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
