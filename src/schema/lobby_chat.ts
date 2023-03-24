import { Type } from "@sinclair/typebox";

import { Service } from "../helpers";

export const lobbyChatEndpoints = {
    say: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    announce: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },

    said: {
        response: Type.Object({}, { additionalProperties: true }),
    },
    announced: {
        response: Type.Object({}, { additionalProperties: true }),
    },
} as const satisfies Service;
