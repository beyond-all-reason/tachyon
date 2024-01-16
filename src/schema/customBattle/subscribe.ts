import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/schema-helpers";

export default defineEndpoint({
    description:
        "Subscribe to custom battle updates. If battleIds is passed only updates to those battles will be sent, otherwise updates for all battles will be sent.",
    request: {
        data: Type.Object({
            battleIds: Type.Optional(Type.Array(Type.Integer())),
        }),
    },
    response: [
        {
            status: "success",
        },
    ],
});
