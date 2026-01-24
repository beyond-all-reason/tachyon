import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "autohost",
    description: "Force players to become spectators in a battle.",
    request: {
        data: Type.Object({
            battleId: Type.String({ format: "uuid" }),
            userIds: Type.Array(Type.Ref("userId")),
        }),
    },
    response: [
        {
            status: "success",
        },
    ],
});
