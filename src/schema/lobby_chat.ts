import { Type } from "@sinclair/typebox";

import { Endpoint, schemaRef } from "../helpers";
import { lobby } from "./types";

export const lobbyChatEndpoints: Record<string, Endpoint> = {
    say: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true })
    },
    announce: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true })
    },

    said: {
        response: Type.Object({}, { additionalProperties: true })
    },
    announced: {
        response: Type.Object({}, { additionalProperties: true })
    }
};
