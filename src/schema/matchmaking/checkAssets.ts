import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "When the client receives this request, it should send a response with the readiness state for the identified assets. The assets are included to ensure the client is aware of the list of assets even if they have not retrieved the queues before. Note that a 'success' response does _not_ mean that the assets are ready.",
    request: {
        data: Type.Object({
            queueId: Type.String(),
            version: Type.String(),
            engines: Type.Array(Type.String()),
            game: Type.String(),
            maps: Type.Array(Type.String()),
        }),
    },
    response: [
        {
            status: "success",
            data: Type.Object({
                assetStatus: Type.Enum(["missing", "downloading", "complete"]),
            }),
        },
    ],
});
