import { Type } from "@sinclair/typebox";

import { schemaRef, Service } from "../helpers";
import { privateUser, user, userIds } from "./types";

export const matchmakingEndpoints = ({
  list_queues: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true }),
  },
  list_joined_queues: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true }),
  },
  get_queue: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true }),
  },
  join_queue: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true })
  },
  leave_queue: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true })
  },
  leave_all_queues: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true })
  },

  match_ready: {
    response: Type.Object({}, { additionalProperties: true })
  },
  accept: {
    request: Type.Object({}, { additionalProperties: true })
  },
  decline: {
    request: Type.Object({}, { additionalProperties: true })
  },
  match_cancelled: {
    response: Type.Object({}, { additionalProperties: true })
  }
} as const) satisfies Service;