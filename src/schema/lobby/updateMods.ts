import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description:
        "Update the mods for the lobby. Only the lobby boss can change mods. Order matters!",
    request: {
        data: Type.Object({
            lobbyId: Type.String(),
            mods: Type.Array(Type.Ref("mod"), {
                description: "Ordered list of mods. Later mods override earlier ones.",
                maxItems: 10,
            }),
        }),
    },
    response: [
        { status: "failed", reason: "insufficient_permissions" },
        { status: "failed", reason: "not_in_lobby" },
        { status: "failed", reason: "too_many_mods" },
        {
            status: "success",
        },
    ],
});
