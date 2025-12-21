import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { UnionEnum } from "@/union-enum";

export default defineEndpoint({
    source: "user",
    target: "server",
    request: {
        data: Type.Object({
            id: Type.String(),
            vote: UnionEnum(["yes", "no", "abstain"]),
        }),
    },
    response: [{ status: "success" }],
});
