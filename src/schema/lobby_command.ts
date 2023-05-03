import { Type } from "@sinclair/typebox";

import { Service } from "../helpers";

export const lobbyCommandEndpoints = {
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
  },
  
  // The lobby host would be sent this if a command it offers is executed
  receive_command: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true }),
  }
} as const satisfies Service;
