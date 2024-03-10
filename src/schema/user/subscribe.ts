import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers";
import { user } from "@/schema/types";

export default defineEndpoint({
    description:
        "Subscribe to user updates. By default, updates for the client's own user will always be subscribed to. If successful, the Tachyon server should respond with full data about the subscribed users, and then continue to send partial (stateful) updates via the [updated](#updated) response.",
    request: {
        data: Type.Object({
            userIds: Type.Array(Type.String()),
        }),
    },
    response: [
        {
            status: "success",
            data: Type.Object({
                users: Type.Array(user),
            }),
        },
    ],
});
