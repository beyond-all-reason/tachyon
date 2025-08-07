import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Leave the lobby, also unsubscribe from any update",
    request: {
        data: Type.Object({
            id: Type.String(),
        }),
    },
    response: [
        {
            status: "success",
        },
    ],
});
