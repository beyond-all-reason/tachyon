import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Notify the player that their friend request has been accepted",
    event: {
        data: Type.Object({
            from: Type.Ref("userId"),
        }),
    },
});
