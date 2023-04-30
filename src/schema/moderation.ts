import { Type } from "@sinclair/typebox";

import { Service } from "../helpers";

export const moderationEndpoints = {
  /*
  This will pull back a list of reasons you can report someone
  */
  get_reporting_configs: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true }),
  },
  report_userclient: {
    request: Type.Object({}, { additionalProperties: true }),
    response: Type.Object({}, { additionalProperties: true }),
  }
} as const satisfies Service;
