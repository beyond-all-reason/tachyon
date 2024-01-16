import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/schema-helpers";

export default defineEndpoint({
    description:
        "Server should send this when there are enough queued players to form a valid game that meets their criteria. Clients should respond with [ready](#ready).",
    response: [
        {
            status: "success",
            data: Type.Object({
                queueId: Type.String(),
            }),
        },
    ],
});
