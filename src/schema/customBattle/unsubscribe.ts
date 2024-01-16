import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/schema-helpers";

export default defineEndpoint({
    description:
        "Unsubscribe from custom battle updates. If battleIds is passed only updates to those battles will be stopped, otherwise this will stop updates for all battles.",
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
