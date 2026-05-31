import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Unboss the given user",
    request: {
        data: Type.Object(
            {
                userId: Type.Optional(Type.Ref("userId")),
            },
            { description: "if userId isn't provided, defaults to the current user" }
        ),
    },
    response: [{ status: "failed", reason: "not_a_boss" }, { status: "success" }],
});
