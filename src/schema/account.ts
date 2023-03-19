import { Type } from "@sinclair/typebox";

import { Endpoint } from "../helpers";
import { privateUser, user, userIds } from "./types";

export const accountEndpoints: Record<string, Endpoint> = {
    who_am_i: {
        request: Type.Object({}),
        response: privateUser
    },
    list_users: {
        request: Type.Object({
            ids: userIds
        }),
        response: Type.Object({
            users: Type.Array(user)
        })
    },
    list_friends: {
        request: Type.Object({}),
        response: user
    }
};

