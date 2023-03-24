import { Type } from "@sinclair/typebox";

import { schemaRef, Service } from "../helpers";
import { privateUser, user, userIds } from "./types";

export const systemEndpoints = ({
  server_event: {
    response: Type.Object({}, { additionalProperties: true })
  }
} as const) satisfies Service;