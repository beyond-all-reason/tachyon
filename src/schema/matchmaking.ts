import { Type } from "@sinclair/typebox";

import { schemaRef, Service } from "../helpers";
import { privateUser, user, userIds } from "./types";

export const matchmakingEndpoints = ({
  list_queues: {
    request: Type.Object({}),
    response: Type.Object({}),
  },
  list_joined_queues: {
    request: Type.Object({}),
    response: Type.Object({}),
  },
  get_queue: {
    request: Type.Object({}),
    response: Type.Object({}),
  },
  join_queue: {
    request: Type.Object({}),
    response: Type.Object({})
  },
  leave_queue: {
    request: Type.Object({}),
    response: Type.Object({})
  },
  leave_all_queues: {
    request: Type.Object({}),
    response: Type.Object({})
  },

  match_ready: {
    response: Type.Object({})
  },
  accept: {
    request: Type.Object({})
  },
  decline: {
    request: Type.Object({})
  },
  match_cancelled: {
    response: Type.Object({})
  }
} as const) satisfies Service;