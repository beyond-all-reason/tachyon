import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";
import { email, username } from "@/schema/types";

export default defineEndpoint({
    description: "Get an authentication token used for [login](#login).",
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
                    password: Type.String(),
                }),
            ],
            {
                examples: [
                    {
                        email: "bob@test.com",
                        password: "banana1234",
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
        { status: "failed", reason: "invalid_password" },
        { status: "failed", reason: "max_attempts" },
    ],
});
