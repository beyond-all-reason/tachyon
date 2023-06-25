import { Type } from "@sinclair/typebox";

import { defineResponses, Endpoint, failed, success } from "@/helpers";

export default {
    request: Type.Union([
        Type.Object({
            email: Type.String(),
            password: Type.String(),
        }),
        Type.Object({
            username: Type.String(),
            password: Type.String(),
        }),
    ]),
    response: defineResponses([
        success(
            Type.Object({
                token: Type.String(),
            })
        ),
        failed(["no_user_found", "invalid_password", "max_attempts"]),
    ]),
} satisfies Endpoint;
