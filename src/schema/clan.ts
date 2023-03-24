import { Type } from "@sinclair/typebox";

import { Endpoint, schemaRef } from "../helpers";
import { lobby } from "./types";

export const clanEndpoints: Record<string, Endpoint> = {
  list_clans: {
    request: Type.Object({}),
    response: Type.Object({})
  },
  get_clan: {
    request: Type.Object({}),
    response: Type.Object({})
  },
  create_invite: {
    request: Type.Object({}),
    response: Type.Object({})
  },
  respond_to_invite: {
    request: Type.Object({}),
    response: Type.Object({})
  }
};
