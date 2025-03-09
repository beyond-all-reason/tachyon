import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "An invite has been declined",
    event: {
        data: Type.Object({
            userId: Type.Ref(userId),
            reason: Type.Union([Type.Literal("declined"), Type.Literal("timed_out")]),
        }),
    },
});
