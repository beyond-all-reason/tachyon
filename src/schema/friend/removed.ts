import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "Notify the player that they are no longer friend with a player. Typically, that player removed them from their friendlist",
    event: {
        data: Type.Object({
            from: Type.Ref(userId),
        }),
    },
});
