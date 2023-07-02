import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    request: Type.Object(
        {
            email: Type.String(),
            username: Type.String({ pattern: "^[A-Za-z0-9_-]+$", minLength: 2, maxLength: 20 }),
            password: Type.String(),
        },
        {
            examples: [
                {
                    email: "bob@test.com",
                    username: "bob",
                    password: "banana1234",
                },
            ],
        }
    ),
    response: [
        { status: "success" },
        { status: "failed", reason: "email_taken" },
        { status: "failed", reason: "username_taken" },
        { status: "failed", reason: "invalid_email" },
        { status: "failed", reason: "weak_password" },
        { status: "failed", reason: "username_profanity" },
    ],
    order: 1,
});
