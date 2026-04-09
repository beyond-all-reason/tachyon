import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Make the designated player a boss",
    request: {
        data: Type.Object({
            userId: Type.Ref("userId"),
        }),
    },
    response: [{ status: "failed", reason: "bosses_not_allowed" }, { status: "success" }],
});
