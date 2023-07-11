import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";
import { privateUserClient } from "@/schema/types";

export default defineEndpoint({
    description: "Login using an authentication token from [getToken](#gettoken).",
    order: 3,
    request: {
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
    response: [
        {
            status: "success",
            data: Type.Object(
                {
                    user: privateUserClient,
                },
                {
                    examples: [
                        {
                            user: {
                                battleStatus: null,
                                userId: 123,
                                email: "bob@test.com",
                                username: "bob",
                                isBot: false,
                                clanId: null,
                                friends: [12, 34],
                                friendRequests: [477],
                                icons: {
                                    rank: "silver-5",
                                },
                                ignores: [],
                                roles: ["mentor"],
                            },
                        },
                    ],
                }
            ),
        },
        { status: "failed", reason: "invalid_token" },
        { status: "failed", reason: "expired_token" },
        { status: "failed", reason: "banned" },
    ],
});
