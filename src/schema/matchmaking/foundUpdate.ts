import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    description: "Server should send this when players ready up using [ready](#ready).",
    response: [
        {
            status: "success",
            data: Type.Object({
                readyCount: Type.Integer(),
            }),
        },
    ],
});
