import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "A player was kicked from a clan. Sent to the kicked player.",
    event: {
        data: Type.Object({
            clanBaseData: Type.Ref("clanBaseData"),
        }),
    },
});
