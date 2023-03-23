import { Type } from "@sinclair/typebox";

import { schemaRef,Service } from "../helpers";
import { privateUser, user, userIds } from "./types";

export const accountEndpoints = ({
    who_am_i: {
        request: Type.Object({}),
        response: schemaRef(privateUser)
    },
    list_users: {
        request: Type.Object({
            ids: schemaRef(userIds)
        }),
        response: Type.Object({
            users: Type.Array(schemaRef(user))
        })
    },
    list_friends: {
        request: Type.Object({}),
        response: Type.Array(schemaRef(user))
    }
} as const) satisfies Service;