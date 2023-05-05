import { Type } from "@sinclair/typebox";

import { failed, ServiceSchema, success } from "../helpers";

export const authEndpoints = {
    register: {
        request: Type.Object({
            email: Type.String({ format: "email" }),
            username: Type.String(),
            password: Type.String(),
        }),
        response: Type.Union([
            success(),
            failed("email_taken"),
            failed("username_taken"),
            failed("invalid_email"),
            failed("weak_password"),
            failed("username_profanity")
        ])
    },
    disconnect: {
        request: Type.Object({}),
    },
} as const satisfies ServiceSchema;