import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers";

export default defineEndpoint({
    description:
        "Subscribe to custom battle updates. By default, updates for the user's own battle will always be subscribed to. If successful, the Tachyon server should respond with full data about the subscribed battles, and then continue to send partial (stateful) updates via the [updated](#updated) response.",
    request: {
        data: Type.Object({
            battleIds: Type.Array(Type.Integer()),
        }),
    },
    response: [
        {
            status: "success",
        },
    ],
});
