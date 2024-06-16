import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "autohost",
    target: "server",
    description:
        "This event should be sent to the server on connection and whenever any of the status properties change.",
    event: {
        data: Type.Object({
            maxBattles: Type.Integer({ minimum: 0 }),
            currentBattles: Type.Integer({ minimum: 0 }),
        }),
    },
});
