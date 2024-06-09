import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "autohost",
    description: "Send a custom command for the autohost to execute.",
    request: {
        data: Type.Object({
            battleId: Type.String({ format: "uuid" }),
            command: Type.String(),
            arguments: Type.Optional(Type.Array(Type.String())),
        }),
    },
    response: [
        {
            status: "success",
        },
    ],
});
