import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Notify the player that someone sent them a friend request",
    event: {
        data: Type.Object({
            from: Type.Ref(userId),
        }),
    },
});
