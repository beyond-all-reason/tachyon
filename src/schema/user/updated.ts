import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { privateUser } from "@/schema/definitions";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "Sent by the server to inform the client when subscribed users get updated in some way. The root object of each array element in `users` are partial, meaning only the elements present have changed, and anything missing is assumed to be unchanged. This event should be sent to a user when they login to inform them about their own user data.",
    event: {
        data: Type.Object({
            users: Type.Array(Type.Ref(privateUser)),
        }),
    },
});
