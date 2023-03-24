import { Type } from "@sinclair/typebox";

import { Service } from "../helpers";

export const communicationEndpoints = {
    send_direct_message: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    received_direct_message: {
        response: Type.Object({}, { additionalProperties: true }),
    },
} as const satisfies Service;
