import { DefineServiceSchema, FailedResponse, Request, SuccessResponse } from "../helpers";

export type AuthService = DefineServiceSchema<{
    register: {
        request: Request<{
            email: string;
            username: string;
            password: string;
        }>;
        response:
            | SuccessResponse
            | FailedResponse<"email_taken">
            | FailedResponse<"username_taken">
            | FailedResponse<"invalid_email">
            | FailedResponse<"weak_password">
            | FailedResponse<"username_profanity">;
    };
    getToken: {
        request: Request<({ email: string } | { username: string }) & { password: string }>;
        response:
            | SuccessResponse
            | FailedResponse<"no_account_with_email">
            | FailedResponse<"no_account_with_username">
            | FailedResponse<"invalid_password">
            | FailedResponse<"max_attempts_reached">
            | FailedResponse<"account_banned">;
    };
}>;
