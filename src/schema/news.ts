import { Type } from "@sinclair/typebox";

import { schemaRef, Service } from "../helpers";
import { privateUser, user, userIds } from "./types";

export const newsEndpoints = ({
  list_news_items: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true }),
  }
} as const) satisfies Service;