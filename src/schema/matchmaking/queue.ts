import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Queue up for matchmaking. Should cancel the previous queue if already in one.",
    request: {
        data: Type.Object(
            {
                queues: Type.Array(
                    Type.Object({
                        id: Type.String(),
                        version: Type.String(),
                    }),
                    { minItems: 1 }
                ),
            },
            {
                examples: [
                    {
                        queues: [
                            {
                                id: "1v1",
                                version: "27n6cr76nyfqic73647c1328c94",
                            },
                        ],
                    },
                ],
            }
        ),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "invalid_queue_specified" },
        { status: "failed", reason: "already_queued" },
        { status: "failed", reason: "already_in_battle" },
        { status: "failed", reason: "version_mismatch" },
    ],
});
