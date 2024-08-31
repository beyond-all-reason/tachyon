import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: `Sent when a found match gets disbanded because a client failed to ready up.
      The player is put back into the queue when this happen.`,
    event: {
        data: Type.Object({
            queueId: Type.String(),
        }),
    },
});
