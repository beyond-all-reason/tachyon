import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    description: "Send a lobby message. See (receiveMessage)[#receiveMessage] for incoming messages.",
    request: {
        data: Type.Object(
            {
                message: Type.String({ maxLength: 300 }),
            },
            {
                examples: [
                    {
                        message: "Hello lobby!",
                    },
                ],
            }
        ),
    },
    response: [
        {
            status: "success",
        },
        {
            status: "failed",
            reason: "not_in_lobby",
        },
        {
            status: "failed",
            reason: "muted",
        },
    ],
});
