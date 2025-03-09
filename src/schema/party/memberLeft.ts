import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "A member has left the party",
    event: {
        data: Type.Object({
            userId: Type.Ref(userId),
            reason: Type.Union([Type.Literal("left"), Type.Literal("kicked")]),
        }),
    },
});
