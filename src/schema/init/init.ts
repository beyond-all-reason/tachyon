import { Type } from "@sinclair/typebox";

import { defineResponse, EndpointSchema, success } from "@/helpers";

export default {
    response: defineResponse([
        success(
            Type.Object({
                tachyonVersion: Type.String({ examples: ["1.2.3"] }),
            })
        ),
    ]),
} satisfies EndpointSchema;
