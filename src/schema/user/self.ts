import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { privateUser } from "@/schema/definitions/privateUser";
import { user } from "@/schema/definitions/user";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "Sent by the server to inform the client of its own user state / user state changes. This event should be sent to a user when they login.",
    event: {
        data: Type.Object({
            user: Type.Partial(Type.Deref(privateUser, [user, userId])),
        }),
    },
});
