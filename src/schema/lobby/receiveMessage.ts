import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers";

export default defineEndpoint({
    description: "Receive a lobby message. See [sendMessage](#sendmessage) for outgoing messages.",
    response: [
        {
            status: "success",
            data: Type.Object(
                {
                    userId: Type.Integer(),
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
    ],
});
