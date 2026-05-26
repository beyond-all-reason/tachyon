import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Log a named event with an arbitrary JSON payload.",
    request: {
        data: Type.Object({
            eventName: Type.String({ maxLength: 128 }),
            eventData: Type.Object(
                {},
                { description: "Arbitrary JSON payload, max 4096 bytes serialized." }
            ),
            anonHash: Type.Optional(
                Type.String({ description: "Unique install hash for unauthenticated users." })
            ),
        }),
    },
    response: [{ status: "success" }],
});
