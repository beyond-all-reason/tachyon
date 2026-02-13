import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "A player was kicked from a clan. Sent to the kicked player.",
    event: {
        data: Type.Object({
            clanId: Type.Ref("clanId"),
        }),
    },
});
