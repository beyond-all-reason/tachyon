import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "autohost",
    description: "Send a message for the autohost to display to players.",
    request: {
        data: Type.Object({
            battleId: Type.String({ format: "uuid" }),
            message: Type.String({ maxLength: 127 }),
        }),
    },
    response: [
        {
            status: "success",
        },
    ],
});
