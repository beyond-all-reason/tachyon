import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "autohost",
    description: "Request to kill a battle.",
    request: {
        data: Type.Object({
            battleId: Type.String({ format: "uuid" }),
        }),
    },
    response: [
        {
            status: "success",
        },
    ],
});
