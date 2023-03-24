import { Type } from "@sinclair/typebox";

import { Endpoint, schemaRef } from "../helpers";
import { lobby } from "./types";

export const clanEndpoints: Record<string, Endpoint> = {
  list_clans: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true })
  },
  get_clan: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true })
  },
  create_invite: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true })
  },
  respond_to_invite: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true })
  }
};
