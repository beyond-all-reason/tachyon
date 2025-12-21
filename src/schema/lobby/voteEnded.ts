import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { UnionEnum } from "@/union-enum";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "To let clients know a vote has finished and its outcome",
    event: {
        data: Type.Object({
            id: Type.String(),
            outcome: UnionEnum(["passed", "failed", "cancelled", "timeout"]),
        }),
    },
});
