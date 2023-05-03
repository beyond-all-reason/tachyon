/*
While most commands take place in lobbies we may want the opportunity
to issue commands outside of lobbies. Ideally where possible these
will be features within the Tachyon protocol but the option exists.
*/

import { Type } from "@sinclair/typebox";

import { Service } from "../helpers";

export const menuCommandEndpoints = {
  /*
  This will pull back information on all commands available in this room
  */
  request_command_schema: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true }),
  },
  send_command: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true }),
  }
} as const satisfies Service;
