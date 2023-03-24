import { Type } from "@sinclair/typebox";

import { Service } from "../helpers";

export const authEndpoints = {
    disconnect: {
        request: Type.Object({}, { additionalProperties: true }),
    },
} as const satisfies Service;
