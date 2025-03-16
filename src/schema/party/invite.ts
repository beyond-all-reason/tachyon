import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "invite the target player to your current party",
    request: {
        data: Type.Object({
            userId: Type.Ref(userId),
        }),
    },
    response: [{ status: "success" }],
});
