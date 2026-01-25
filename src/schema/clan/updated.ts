import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "One ore more clan properties were updated. Sent to all clan members.",
    event: {
        data: Type.Object({
            description: Type.Optional(Type.String({ maxLength: 500 })),
            name: Type.Optional(Type.String({ maxLength: 30 })),
            tag: Type.Optional(Type.String({ minLength: 3, maxLength: 6 })),
        }),
    },
});
