import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "autohost",
    target: "server",
    description: "",
    event: {
        data: Type.Object({
            maxBattles: Type.Integer(),
            currentBattles: Type.Integer(),
        }),
    },
});
