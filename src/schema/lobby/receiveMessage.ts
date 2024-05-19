import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Receive a lobby message. See [sendMessage](#sendmessage) for outgoing messages.",
    event: {
        data: Type.Object(
            {
                userId: Type.String(),
                message: Type.String(),
            },
            {
                examples: [
                    {
                        userId: 27,
                        message: "Hello lobby!",
                    },
                ],
            }
        ),
    },
});
