import { Type } from "@sinclair/typebox";

import { defineRequest, defineResponse, EndpointSchema, failed, success } from "@/helpers";

export default {
    request: defineRequest(
        Type.Object({
            email: Type.String(),
            username: Type.String({ pattern: "^[A-Za-z0-9_-]+$", minLength: 2, maxLength: 20 }),
            password: Type.String(),
        })
    ),
    response: defineResponse([success(), failed(["email_taken", "username_taken", "invalid_email", "weak_password", "username_profanity"])]),
    order: 1,
} satisfies EndpointSchema;
