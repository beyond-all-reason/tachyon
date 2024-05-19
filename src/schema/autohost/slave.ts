import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "autohost",
    target: "server",
    description: "Registers the autohost as slavable by the master server to be used for hosting dedicated lobbies or matchmaking.",
    scopes: ["autohost"],
    request: {
        data: Type.Object({
            maxBattles: Type.Integer({ minimum: 1, default: 4 }),
        }),
    },
    response: [{ status: "success" }],
});
