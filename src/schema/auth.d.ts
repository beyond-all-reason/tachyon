import { DefineServiceSchema } from "../helpers";
import { PrivateUserClient } from "./types";

export type AuthService = DefineServiceSchema<{
    register: {
        request: {
            email: string;
            username: string;
            password: string;
        };
        response:
            | {
                  status: "success";
              }
            | {
                  status: "failed";
                  reason: "email_taken" | "username_taken" | "invalid_email" | "weak_password" | "username_profanity";
              };
    };
    getToken: {
        request: ({ email: string } | { username: string }) & { password: string };
        response:
            | {
                  status: "success";
                  data: {
                      token: string;
                  };
              }
            | {
                  status: "failed";
                  reason: "no_user_found" | "invalid_password" | "max_attempts";
              };
    };
    login: {
        request: {
            token: string;
        };
        response:
            | {
                  status: "success";
                  data: {
                      user: PrivateUserClient;
                  };
              }
            | {
                  status: "failed";
                  reason: "invalid_token" | "expired_token" | "banned";
              };
    };
}>;
