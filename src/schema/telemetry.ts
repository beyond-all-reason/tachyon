import { Type } from "@sinclair/typebox";

import { schemaRef, Service } from "../helpers";
import { privateUser, user, userIds } from "./types";

export const telemetryEndpoints = ({
  property: {
    request: Type.Object({}, { additionalProperties: true })
  },
  event: {
    request: Type.Object({}, { additionalProperties: true })
  }
} as const) satisfies Service;