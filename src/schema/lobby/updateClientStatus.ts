import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Update the player's status",
    request: {
        data: Type.Object({
            isReady: Type.Optional(Type.Boolean()),
            assetStatus: Type.Optional(Type.Enum(["missing", "downloading", "ready"])),
        }),
    },
    response: [
        { status: "failed", reason: "not_in_lobby" },
        { status: "failed", reason: "not_a_player" },
        { status: "success" },
    ],
});
