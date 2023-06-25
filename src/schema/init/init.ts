import { Type } from "@sinclair/typebox";

import { defineResponses, Endpoint, success } from "@/helpers";

export default {
    response: defineResponses([
        success(
            Type.Object({
                tachyonVersion: Type.String(),
            })
        ),
    ]),
} satisfies Endpoint;
