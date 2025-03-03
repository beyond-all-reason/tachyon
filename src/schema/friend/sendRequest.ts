import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Send a friend request to the target player",
    request: {
        data: Type.Object({
            to: Type.Ref(userId),
        }),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "invalid_user" },
        { status: "failed", reason: "already_in_friendlist" },
        { status: "failed", reason: "outgoing_capacity_reached" },
        { status: "failed", reason: "incoming_capacity_reached" },
    ],
});
