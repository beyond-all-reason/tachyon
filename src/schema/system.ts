import { Type } from "@sinclair/typebox";

import { Service } from "../helpers";

export const systemEndpoints = {
    server_event: {
        response: Type.Object({}, { additionalProperties: true }),
    },
} as const satisfies Service;
