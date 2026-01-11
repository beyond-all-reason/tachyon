import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "One ore more clan properties were updated. Sent to all clan members.",
    event: {
        data: Type.Object({
            updateTypes: Type.Array(
                Type.Enum({
                    description: "description",
                    tag: "tag",
                    name: "name",
                })
            ),
        }),
    },
});
