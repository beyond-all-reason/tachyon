import { Type } from "@sinclair/typebox";

import { Endpoint } from "../helpers";
import { privateUser } from "./types";

export const authEndpoints: Record<string, Endpoint> = {
    get_token: {
        request: Type.Object({
            email: Type.String(),
            password: Type.String({ minLength: 6 })
        }),
        response: Type.Object({
            token: Type.String()
        })
    },
    login: {
        request: Type.Object({
            token: Type.String(),
            app_name: Type.String(),
            app_version: Type.String(),
            app_hash: Type.String()
        }),
        response: Type.Ref(privateUser)
    },
    verify: {
        request: Type.Object({
            token: Type.String(),
            code: Type.String()
        }),
        response: Type.Ref(privateUser)
    }
};