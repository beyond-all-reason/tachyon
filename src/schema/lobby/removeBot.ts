import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Remove the specified bot from the lobby",
    request: {
        data: Type.Object({
            id: Type.String(),
        }),
    },
    response: [
        { status: "failed", reason: "not_in_lobby" },
        { status: "failed", reason: "invalid_bot" },
        { status: "success" },
    ],
});
