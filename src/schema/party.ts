import { Type } from "@sinclair/typebox";

import { Service } from "../helpers";

export const partyEndpoints = {
    create: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    get_party: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    invite: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    accept_invite: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    decline_invite: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    kick: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    send_message: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },

    // Server updates
    updated: {
        response: Type.Object({}, { additionalProperties: true }),
    },
    see_message: {
        response: Type.Object({}, { additionalProperties: true }),
    },
} as const satisfies Service;
