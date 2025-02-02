import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { historyMarker } from "@/schema/definitions/historyMarker";
import { unixTime } from "@/schema/definitions/unixTime";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Notify the player a message has been received",
    event: {
        data: Type.Object({
            message: Type.String(),
            source: Type.Union([
                Type.Object({
                    type: Type.Literal("player"),
                    userId: Type.Ref(userId),
                }),
            ]),
            timestamp: Type.Ref(unixTime, {
                description: "time at which the message was received by the server",
            }),
            marker: Type.Ref(historyMarker),
        }),
    },
});
