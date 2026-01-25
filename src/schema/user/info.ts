import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Fetch user info from the server.",
    request: {
        data: Type.Object({
            userId: Type.Ref("userId"),
        }),
    },
    response: [
        {
            status: "success",
            data: Type.Ref("user"),
        },
        {
            status: "failed",
            reason: "unknown_user",
        },
    ],
});
