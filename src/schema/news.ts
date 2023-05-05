import { Type } from "@sinclair/typebox";

import { ServiceSchema } from "../helpers";

export const newsEndpoints = {
    list_news_items: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
} as const satisfies ServiceSchema;
