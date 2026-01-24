import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "To let clients know a vote has finished and its outcome",
    event: {
        data: Type.Object({
            id: Type.String(),
            outcome: Type.Enum(["passed", "failed", "cancelled", "timeout"]),
        }),
    },
});
