import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers";
import { privateUser } from "@/schema/types";

export default defineEndpoint({
    description:
        "Sent by the server to inform the client when subscribed users get updated in some way. The root object of each array element in `users` are partial, meaning only the elements present have changed, and anything missing is assumed to be unchanged.",
    response: [
        {
            status: "success",
            data: Type.Object({
                users: Type.Array(Type.Partial(privateUser)),
            }),
        },
    ],
});
