import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Notify the player that a friend request they received is no longer valid",
    event: {
        data: Type.Object({
            from: Type.Ref("userId"),
        }),
    },
});
