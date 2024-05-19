import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: `Join a custom lobby. Server will send a [joined](#joined) response containing the joined lobby's data. 
These commands are split because the server may want to force the client to join a battle without them explicitly requesting it.`,
    request: {
        data: Type.Object(
            {
                lobbyId: Type.String(),
                password: Type.Optional(Type.String()),
            },
            {
                examples: [
                    {
                        lobbyId: 27,
                        password: "fish",
                    },
                ],
            }
        ),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "locked" },
        { status: "failed", reason: "requires_password" },
        { status: "failed", reason: "invalid_password" },
        { status: "failed", reason: "max_participants_reached" },
        { status: "failed", reason: "rank_too_low" },
        { status: "failed", reason: "rank_too_high" },
        { status: "failed", reason: "banned" },
    ],
});
