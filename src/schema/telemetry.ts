import { Type } from "@sinclair/typebox";

import { schemaRef, Service } from "../helpers";
import { privateUser, user, userIds } from "./types";

export const telemetryEndpoints = ({
  property: {
    request: Type.Object({})
  },
  event: {
    request: Type.Object({})
  }
} as const) satisfies Service;