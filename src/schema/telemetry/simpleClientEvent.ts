import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Log a simple named event with no payload.",
    request: {
        data: Type.Object({
            eventName: Type.String({ maxLength: 128 }),
            anonHash: Type.Optional(
                Type.String({
                    description: "Unique install hash for unauthenticated users.",
                })
            ),
        }),
    },
    response: [{ status: "success" }],
});
