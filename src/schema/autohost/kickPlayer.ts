import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "autohost",
    description: "Kick a player from a battle.",
    request: {
        data: Type.Object({
            battleId: Type.Ref("battleId"),
            userId: Type.Ref("userId"),
        }),
    },
    response: [
        {
            status: "success",
        },
    ],
});
