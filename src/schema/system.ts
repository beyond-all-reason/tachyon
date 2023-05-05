import { Type } from "@sinclair/typebox";

import { ServiceSchema } from "../helpers";

export const systemEndpoints = {
    server_event: {
        response: Type.Object({}, { additionalProperties: true }),
    },
    error: {
        response: Type.Object({}, { additionalProperties: true }),
    },
} as const satisfies ServiceSchema;
