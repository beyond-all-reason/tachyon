import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "Notify clients about changed clan list. Sent to the user when their clan list has changed.",
    event: {
        data: Type.Object({
            clans: Type.Array(Type.Ref("clan")),
        }),
    },
});
