import { Type } from "@sinclair/typebox";

import { schemaRef, Service } from "../helpers";
import { privateUser, user, userIds } from "./types";

export const partyEndpoints = ({
  create: {
    request: Type.Object({}),
    response: Type.Object({}),
  },
  get_party: {
    request: Type.Object({}),
    response: Type.Object({}),
  },
  invite: {
    request: Type.Object({}),
    response: Type.Object({}),
  },
  accept_invite: {
    request: Type.Object({}),
    response: Type.Object({}),
  },
  decline_invite: {
    request: Type.Object({}),
    response: Type.Object({}),
  },
  kick: {
    request: Type.Object({}),
    response: Type.Object({}),
  },
  send_message: {
    request: Type.Object({}),
    response: Type.Object({}),
  },
  
  // Server updates
  updated: {
    response: Type.Object({}),
  },
  see_message: {
    response: Type.Object({}),
  }
} as const) satisfies Service;