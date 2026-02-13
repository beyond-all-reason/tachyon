import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Cancel an invite to your clan.",
    request: {
        data: Type.Object({
            userId: Type.Ref("userId"),
        }),
    },
    response: [{ status: "success" }],
});
