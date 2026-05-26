import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Set or overwrite a named client property value.",
    request: {
        data: Type.Object({
            propertyName: Type.String({
                maxLength: 128,
                description: "Property key, e.g. 'window-mode', 'grid-keys'.",
            }),
            value: Type.String({
                maxLength: 512,
                description: "Latest value, overwrites previous.",
            }),
            anonHash: Type.Optional(
                Type.String({ description: "Unique install hash for unauthenticated users." })
            ),
        }),
    },
    response: [{ status: "success" }],
});
