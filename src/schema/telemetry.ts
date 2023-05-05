import { Type } from "@sinclair/typebox";

import { ServiceSchema } from "../helpers";

export const telemetryEndpoints = {
    property: {
        request: Type.Object({}, { additionalProperties: true }),
    },
    event: {
        request: Type.Object({}, { additionalProperties: true }),
    },
} as const satisfies ServiceSchema;
