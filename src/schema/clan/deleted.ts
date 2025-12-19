import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "A clan was deleted. Sent to all clan members.",
    event: {
        data: Type.Object({
            clan: Type.Ref("clan"),
        }),
    },
});
