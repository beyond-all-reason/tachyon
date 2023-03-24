import { Type } from "@sinclair/typebox";

import { Service } from "../helpers";

export const telemetryEndpoints = {
    property: {
        request: Type.Object({}, { additionalProperties: true }),
    },
    event: {
        request: Type.Object({}, { additionalProperties: true }),
    },
} as const satisfies Service;
