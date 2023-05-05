import { Type } from "@sinclair/typebox";

import { schemaRef, ServiceSchema } from "../helpers";
import { lobby } from "./types";

export const lobbyEndpoints = {
    list_lobbies: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Array(schemaRef(lobby)),
    },
    get: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    join: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    leave: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    update_status: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },

    // Server updates not behind a listener
    updated: {
        response: Type.Object({}, { additionalProperties: true }),
    },
    joined: {
        response: Type.Object({}, { additionalProperties: true }),
    },
    add_user: {
        response: Type.Object({}, { additionalProperties: true }),
    },
    remove_user: {
        response: Type.Object({}, { additionalProperties: true }),
    },
    bot_added: {
        response: Type.Object({}, { additionalProperties: true }),
    },
    bot_updated: {
        response: Type.Object({}, { additionalProperties: true }),
    },
    bot_removed: {
        response: Type.Object({}, { additionalProperties: true }),
    },

    // Server updates, should be behind a listener
    opened: {
        response: Type.Object({}, { additionalProperties: true }),
    },
    closed: {
        response: Type.Object({}, { additionalProperties: true }),
    },
} as const satisfies ServiceSchema;
