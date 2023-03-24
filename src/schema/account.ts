import { Type } from "@sinclair/typebox";

import { schemaRef,Service } from "../helpers";
import { privateUser, user, userIds } from "./types";

export const accountEndpoints = ({
    who_am_i: {
        request: Type.Object({}),
        response: schemaRef(privateUser)
    },
    update_account: {
        request: Type.Object({}),
        response: Type.Object({}),
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
    },
    
    // Friends
    add_friend: {
        request: Type.Object({}),
        response: Type.Object({})
    },
    rescind_friend_request: {
        request: Type.Object({}),
        response: Type.Object({})
    },
    accept_friend_request: {
        request: Type.Object({}),
        response: Type.Object({})
    },
    reject_friend_request: {
        request: Type.Object({}),
        response: Type.Object({})
    },
    remove_friend: {
        request: Type.Object({}),
        response: Type.Object({})
    },
    
    received_friend_request: {
        response: Type.Object({})
    }
} as const) satisfies Service;