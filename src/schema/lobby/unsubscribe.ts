import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    description:
        "Unsubscribe from custom battle updates. If battleIds is passed only updates to those battles will be stopped, otherwise this will stop updates for all battles.",
    request: {
        data: Type.Object({
            battleIds: Type.Optional(Type.Array(Type.String())),
        }),
    },
    response: [
        {
            status: "success",
        },
        {
            status: "failed",
            reason: "cannot_unsub_own_battle",
        },
    ],
});
