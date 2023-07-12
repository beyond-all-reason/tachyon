import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";
import { email, username } from "@/schema/types";

export default defineEndpoint({
    description: `Registers a new account. The user's password should be hashed twice, once on the client, then again on the server before being stored.\n\nThe server implementation may wish to verify the account by sending a verification link to the email address.`,
    requiresLogin: false,
    order: 1,
    request: {
        data: Type.Object(
            {
                email: email,
                username: username,
                hashedPassword: Type.String(),
            },
            {
                examples: [
                    {
                        email: "bob@test.com",
                        username: "bob",
                        hashedPassword: "1b311ff1a6af12fba8720bd2ce02c960",
                    },
                ],
            }
        ),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "email_taken" },
        { status: "failed", reason: "username_taken" },
        { status: "failed", reason: "invalid_email" },
        { status: "failed", reason: "weak_password" },
        { status: "failed", reason: "username_profanity" },
    ],
});
