import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { privateUser } from "@/schema/definitions/privateUser";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "Sent by the server to inform the client of its own user state. This event should be sent to a user when they login.",
    event: {
        data: Type.Object({
            user: Type.Ref(privateUser),
        }),
    },
});
