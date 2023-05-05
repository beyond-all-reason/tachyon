import { Type } from "@sinclair/typebox";

import { ServiceSchema } from "../helpers";

export const moderationEndpoints = {
    /*
  This will pull back a list of reasons you can report someone
  */
    get_reporting_configs: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    report_user: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
} as const satisfies ServiceSchema;
