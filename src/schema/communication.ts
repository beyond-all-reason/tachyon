import { Type } from "@sinclair/typebox";

import { ServiceSchema } from "../helpers";

export const communicationEndpoints = {
    send_direct_message: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    received_direct_message: {
        response: Type.Object({}, { additionalProperties: true }),
    },
    list_notifications: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
} as const satisfies ServiceSchema;
