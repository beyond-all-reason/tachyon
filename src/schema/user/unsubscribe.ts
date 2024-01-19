import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers";

export default defineEndpoint({
    description: "Unsubscribe from user updates.",
    request: {
        data: Type.Object({
            userIds: Type.Array(Type.Integer()),
        }),
    },
    response: [
        {
            status: "success",
        },
        {
            status: "failed",
            reason: "cannot_unsub_own_user",
        },
    ],
});
