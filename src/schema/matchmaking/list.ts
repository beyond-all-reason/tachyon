import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    description: "Returns all available matchmaking queues.",
    request: {},
    response: [
        {
            status: "success",
            data: Type.Object(
                {
                    queues: Type.Array(
                        Type.Object({
                            id: Type.String(),
                            name: Type.String(),
                            ranked: Type.Boolean(),
                        })
                    ),
                },
                {
                    examples: [
                        {
                            queues: [
                                {
                                    id: "1v1",
                                    name: "Duel",
                                    ranked: true,
                                },
                                {
                                    id: "2v2",
                                    name: "2v2",
                                    ranked: true,
                                },
                            ],
                        },
                    ],
                }
            ),
        },
    ],
});
