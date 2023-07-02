import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    request: Type.Intersect(
        [
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
    order: 2,
});
