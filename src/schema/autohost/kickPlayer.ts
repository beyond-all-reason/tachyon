import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "server",
    target: "autohost",
    description: "Kick a player from a battle.",
    request: {
        data: Type.Object({
            battleId: Type.String({ format: "uuid" }),
            userId: Type.Ref(userId),
        }),
    },
    response: [
        {
            status: "success",
        },
    ],
});
