import { Type } from "@sinclair/typebox";

import { defineResponses, Endpoint, failed, success } from "@/helpers";
import { privateUserClient } from "@/schema/types";

export default {
    request: Type.Union([
        Type.Object({
            token: Type.String(),
        }),
    ]),
    response: defineResponses([
        success(
            Type.Object({
                user: privateUserClient,
            })
        ),
        failed(["invalid_token", "expired_token", "banned"]),
    ]),
} satisfies Endpoint;
