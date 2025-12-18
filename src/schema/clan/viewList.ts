import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Get the list of clans",
    request: {},
    response: [
        {
            status: "success",
            data: Type.Object({
                clans: Type.Array(Type.Ref("clan")),
            }),
        },
        { status: "failed", reason: "no_clans_available" },
        { status: "failed", reason: "internal_error" },
        { status: "failed", reason: "service_unavailable" },
        { status: "failed", reason: "timeout" },
    ],
});
