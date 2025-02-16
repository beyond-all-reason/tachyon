import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { user } from "@/schema/definitions/user";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Fetch user info from the server.",
    request: {
        data: Type.Object({
            userId: userId,
        }),
    },
    response: [
        {
            status: "success",
            data: Type.Ref(user),
        },
        {
            status: "failed",
            reason: "unknown_user",
        },
    ],
});
