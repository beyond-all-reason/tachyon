import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers";

export default defineEndpoint({
    description:
        "Registers the client as slavable by the master server to be used for hosting dedicated lobbies or matchmaking.",
    requiresRole: "autohost",
    request: {
        data: Type.Object({
            maxBattles: Type.Integer({ minimum: 1, default: 4 }),
        }),
    },
    response: [{ status: "success" }],
});
