import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Ask the server to send events for relevant messages",
    request: {
        data: Type.Object({
            since: Type.Optional(
                Type.Union(
                    [
                        Type.Object({
                            type: Type.Literal("from_start"),
                        }),
                        Type.Object({
                            type: Type.Literal("latest"),
                        }),
                        Type.Object({
                            type: Type.Literal("marker"),
                            value: Type.Ref("historyMarker"),
                        }),
                    ],
                    { default: { type: "latest" } }
                )
            ),
        }),
    },
    response: [
        {
            status: "success",
            data: Type.Object({
                hasMissedMessages: Type.Boolean({
                    description:
                        "set to true when the marker sent doesn't match any message stored by the server.",
                }),
            }),
        },
    ],
});
