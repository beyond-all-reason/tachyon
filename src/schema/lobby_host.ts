import { Type } from "@sinclair/typebox";

import { Service } from "../helpers";

export const lobbyHostEndpoints = {
    create: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    close: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    join_request: {
        // Server messages first, how do we define request/response for this?
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },

    // In lobby actions
    update_player_status: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    add_bot: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    update_bot: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    remove_bot: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },

    // Battle stuff
    start_battle: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    end_battle: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },

    // Server updates
    updated_status: {
        response: Type.Object({}, { additionalProperties: true }),
    },
} as const satisfies Service;
