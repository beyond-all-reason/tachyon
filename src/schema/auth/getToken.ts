import { Type } from "@sinclair/typebox";

import { defineRequest, defineResponse, EndpointSchema, failed, success } from "@/helpers";

export default {
    request: defineRequest(
        Type.Intersect([
            Type.Union([
                Type.Object({
                    email: Type.String(),
                }),
                Type.Object({
                    username: Type.String(),
                }),
            ]),
            Type.Object({
                password: Type.String(),
            }),
        ]),
        [
            {
                email: "bob@test.com",
                username: "bob",
                password: "1234",
            },
        ]
    ),
    response: defineResponse([
        success(
            Type.Object({
                token: Type.String(),
            })
        ),
        failed(["no_user_found", "invalid_password", "max_attempts"]),
    ]),
} satisfies EndpointSchema;
