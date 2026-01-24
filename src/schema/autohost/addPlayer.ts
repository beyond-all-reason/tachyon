import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "autohost",
    description: "Request to add a new player to the battle.",
    request: {
        data: Type.Object({
            battleId: Type.String({ format: "uuid" }),
            userId: Type.Ref("userId"),
            name: Type.String(),
            password: Type.String(),
        }),
    },
    response: [
        {
            status: "success",
        },
    ],
});
