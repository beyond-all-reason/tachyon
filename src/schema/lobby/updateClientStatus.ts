import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { UnionEnum } from "@/union-enum";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Update the player's status",
    request: {
        data: Type.Object({
            isReady: Type.Optional(Type.Boolean()),
            assetStatus: Type.Optional(UnionEnum(["missing", "downloading", "ready"])),
        }),
    },
    response: [
        { status: "failed", reason: "not_in_lobby" },
        { status: "failed", reason: "not_a_player" },
        { status: "success" },
    ],
});
