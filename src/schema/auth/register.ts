import { Type } from "@sinclair/typebox";

import { defineResponses, Endpoint, failed, success } from "@/helpers";

export default {
    request: Type.Object({
        email: Type.String(),
        username: Type.String(),
        password: Type.String(),
    }),
    response: defineResponses([success(), failed(["email_taken", "username_taken", "invalid_email", "weak_password", "username_profanity"])]),
} satisfies Endpoint;
