import { Type } from "@sinclair/typebox";

import { Endpoint, schemaRef } from "../helpers";
import { lobby } from "./types";

export const communicationEndpoints: Record<string, Endpoint> = {
  send_direct_message: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true })
  },
  received_direct_message: {
    response: Type.Object({}, { additionalProperties: true })
  }
};
