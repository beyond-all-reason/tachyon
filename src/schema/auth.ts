import { Type } from "@sinclair/typebox";

import { Endpoint } from "../helpers";

export const authEndpoints: Record<string, Endpoint> = {
    get_token: {
        request: Type.Object({
            email: Type.String({ format: "email" }),
            password: Type.String({ minLength: 6 })
        }),
        response: Type.Object({
            token: Type.String()
        })
    }
};