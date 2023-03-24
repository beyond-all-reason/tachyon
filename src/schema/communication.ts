import { Type } from "@sinclair/typebox";

import { Endpoint, schemaRef } from "../helpers";
import { lobby } from "./types";

export const communicationEndpoints: Record<string, Endpoint> = {
  send_direct_message: {
    request: Type.Object({}),
    response: Type.Object({})
  },
  received_direct_message: {
    response: Type.Object({})
  }
};
