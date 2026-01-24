import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    request: {
        data: Type.Object({
            id: Type.String(),
            vote: Type.Enum(["yes", "no", "abstain"]),
        }),
    },
    response: [{ status: "success" }],
});
