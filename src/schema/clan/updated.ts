import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "One ore more clan properties were updated. Sent to all clan members.",
    event: {
        data: Type.Ref("clanUpdateableData"),
    },
});
