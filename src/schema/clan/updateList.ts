import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Notify clients about updated clan list",
    event: {
        data: Type.Object({
            clans: Type.Array(Type.Ref("clan")),
        }),
    },
});
