import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { unixTime } from "@/schema/definitions/unixTime";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Retrieve the status of your friendlist",
    request: {
        data: Type.Object({
            friends: Type.Array(
                Type.Object({
                    userId: Type.Ref(userId),
                    addedAt: Type.Ref(unixTime),
                })
            ),
            outgoing_pending_requests: Type.Array(
                Type.Object({
                    to: Type.Ref(userId),
                    sentAt: Type.Ref(unixTime),
                })
            ),
            incoming_pending_requests: Type.Array(
                Type.Object({
                    from: Type.Ref(userId),
                    sentAt: Type.Ref(unixTime),
                })
            ),
        }),
    },
    response: [{ status: "success" }],
});
