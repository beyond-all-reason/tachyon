import { DefineFailedResponse, DefineRequest, DefineServiceSchema, DefineSuccessResponse } from "../helpers";

export type AuthService = DefineServiceSchema<{
    register: {
        request: DefineRequest<{
            email: string;
            username: string;
            password: string;
        }>;
        response:
            | DefineSuccessResponse
            | DefineFailedResponse<"email_taken">
            | DefineFailedResponse<"username_taken">
            | DefineFailedResponse<"invalid_email">
            | DefineFailedResponse<"weak_password">
            | DefineFailedResponse<"username_profanity">
    };
    getToken: {
        request: DefineRequest<({ email: string } | { username: string }) & { password: string }>;
        response:
            | DefineSuccessResponse
            | DefineFailedResponse<"no_user_found">
            | DefineFailedResponse<"invalid_password">
            | DefineFailedResponse<"max_attempts">
            | DefineFailedResponse<"banned">
    };
}>;
