import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Join the game as a spectator this lobby is currently playing.",
    request: {},
    response: [
        { status: "failed", reason: "not_in_lobby" },
        { status: "failed", reason: "no_battle" },
        { status: "failed", reason: "battle_full" },
        {
            status: "success",
            data: Type.Ref("privateBattle"),
        },
    ],
});
