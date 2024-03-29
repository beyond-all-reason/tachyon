import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers";

export default defineEndpoint({
    description: "Get server stats such as user count.",
    request: {},
    response: [
        {
            status: "success",
            data: Type.Object({
                userCount: Type.Integer(),
            }),
        },
    ],
});
