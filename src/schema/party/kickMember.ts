import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Kick the target player from the party",
    request: {
        data: Type.Object({
            userId: Type.Ref(userId),
        }),
    },
    response: [{ status: "success" }],
});
