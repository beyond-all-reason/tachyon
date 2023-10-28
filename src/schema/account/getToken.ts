import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";
import { email, username } from "@/schema/types";

export default defineEndpoint({
    description: "Get an authentication token used for [login](#login).",
    requiresLogin: false,
    order: 2,
    request: {
        data: Type.Intersect(
            [
                Type.Union([
                    Type.Object({
                        email: email,
                    }),
                    Type.Object({
                        username: username,
                    }),
                ]),
                Type.Object({
                    hashedPassword: Type.String({
                        description: "md5 hash of the user's password input",
                    }),
                }),
            ],
            {
                examples: [
                    {
                        email: "bob@test.com",
                        hashedPassword: "1b311ff1a6af12fba8720bd2ce02c960",
                    },
                ],
            }
        ),
    },
    response: [
        {
            status: "success",
            data: Type.Object(
                {
                    token: Type.String(),
                },
                {
                    examples: [
                        {
                            token: "d2d5135930dacad758584b2586d03426",
                        },
                    ],
                }
            ),
        },
        { status: "failed", reason: "no_user_found" },
        { status: "failed", reason: "unverified" },
        { status: "failed", reason: "invalid_password" },
        { status: "failed", reason: "max_attempts" },
    ],
});
