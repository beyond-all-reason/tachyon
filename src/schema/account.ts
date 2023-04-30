import { Type } from "@sinclair/typebox";

import { schemaRef, Service } from "../helpers";
import { privateUserClient, userClient, userClientIds } from "./types";

export const accountEndpoints = {
    who_am_i: {
        request: Type.Object({}, { additionalProperties: true }),
        response: schemaRef(privateUserClient),
    },
    update_account: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    list_userClients: {
        request: Type.Object({
            ids: schemaRef(userClientIds),
        }),
        response: Type.Object({
            userClients: Type.Array(schemaRef(userClient)),
        }),
    },
    list_friends: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Array(schemaRef(userClient)),
    },

    // Friends
    add_friend: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    rescind_friend_request: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    accept_friend_request: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    reject_friend_request: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    remove_friend: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },

    received_friend_request: {
        response: Type.Object({}, { additionalProperties: true }),
    },
} as const satisfies Service;
