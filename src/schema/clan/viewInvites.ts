import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Get the list of invited users.",
    request: {
        data: Type.Object({
            clanId: Type.Ref("clanId"),
        }),
    },
    response: [
        {
            status: "success",
            data: Type.Object({
                users: Type.Array(Type.Ref("user")),
            }),
        },
    ],
});
