import { Type } from "@sinclair/typebox";

import { schemaRef,Service } from "../helpers";
import { privateUser, user, userIds } from "./types";

export const accountEndpoints = ({
    who_am_i: {
        request: Type.Object({}, { additionalProperties: true }),
        response: schemaRef(privateUser)
    },
    update_account: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
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
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Array(schemaRef(user))
    },
    
    // Friends
    add_friend: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true })
    },
    rescind_friend_request: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true })
    },
    accept_friend_request: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true })
    },
    reject_friend_request: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true })
    },
    remove_friend: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true })
    },
    
    received_friend_request: {
        response: Type.Object({}, { additionalProperties: true })
    }
} as const) satisfies Service;