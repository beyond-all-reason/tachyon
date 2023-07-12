import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    description:
        "Join a custom lobby. Server will send a [joined](#joined) response containing the joined lobby's data.",
    request: {
        data: Type.Object(
            {
                lobbyId: Type.Integer(),
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
