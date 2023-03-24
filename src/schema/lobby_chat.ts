import { Type } from "@sinclair/typebox";

import { Endpoint, schemaRef } from "../helpers";
import { lobby } from "./types";

export const lobbyChatEndpoints: Record<string, Endpoint> = {
    say: {
        request: Type.Object({}),
        response: Type.Object({})
    },
    announce: {
        request: Type.Object({}),
        response: Type.Object({})
    },

    said: {
        response: Type.Object({})
    },
    announced: {
        response: Type.Object({})
    }
};
