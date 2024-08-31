import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Sent when a client in a found match readies up.",
    event: {
        data: Type.Object({
            queueId: Type.Integer(),
            readyMax: Type.Integer(),
            readyCurrent: Type.Integer(),
        }),
    },
});
