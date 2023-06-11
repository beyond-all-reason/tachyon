import { DefineServiceSchema, EmptyObject } from "../helpers";
import { PrivateUserClient } from "./types";

export type AuthService = DefineServiceSchema<{
    register: {
        request: {
            email: string;
            username: string;
            password: string;
        };
        response: {
            success: EmptyObject;
            failed: "email_taken" | "username_taken" | "invalid_email" | "weak_password" | "username_profanity";
        };
    };
    getToken: {
        request: ({ email: string } | { username: string }) & { password: string };
        response: {
            success: {
                user: PrivateUserClient;
            };
            failed: "no_user_found" | "invalid_password" | "max_attempts" | "banned";
        };
    };
}>;
