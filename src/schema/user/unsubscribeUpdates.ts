import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "user",
    target: "server",
    description:
        "Ask the server to stop sending user updates for the given set of userId. This should always succeed.",
    request: {
        data: Type.Object({
            userIds: Type.Array(Type.Ref(userId)),
        }),
    },
    response: [
        {
            status: "success",
        },
    ],
});
