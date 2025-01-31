import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { unixTime } from "@/schema/definitions/unixTime";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Ask the server to send events for relevant messages",
    request: {
        data: Type.Object({
            source: Type.Union([
                Type.Object({
                    type: Type.Literal("player"),
                    player_id: Type.String(),
                }),
            ]),
            since: Type.Optional(
                Type.Union([
                    Type.Object({
                        type: Type.Literal("from_start"),
                    }),
                    Type.Object({
                        type: Type.Literal("latest"),
                    }),
                    Type.Object({
                        type: Type.Literal("marker"),
                        value: Type.Integer(),
                    }),
                ])
            ),
        }),
    },
    response: [
        {
            status: "success",
            data: Type.Optional(
                Type.Object({
                    history: Type.Array(
                        Type.Object({
                            message: Type.String(),
                            marker: Type.Ref(unixTime),
                        })
                    ),
                    has_missed_messages: Type.Boolean({
                        description:
                            "set to true when the marker sent doesn't match any message stored by the server.",
                    }),
                })
            ),
        },
    ],
});
