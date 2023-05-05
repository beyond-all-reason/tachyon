import { Type } from "@sinclair/typebox";

import { ServiceSchema } from "../helpers";

export const unauthEndpoints = {
    connected: {
        response: Type.Object({
            tachyon_version: Type.String(),
        }),
    },
} as const satisfies ServiceSchema;
