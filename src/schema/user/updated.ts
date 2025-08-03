import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { user } from "@/schema/definitions/user";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "Sent by the server to inform the client of user state changes. User objects should be full when first sent, then only updates gets sent.",
    event: {
        data: Type.Object({
            users: Type.Array(Type.Partial(user)),
        }),
    },
});
