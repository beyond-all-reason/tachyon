import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/schema-helpers";
import { customBattle } from "@/schema/types";

export default defineEndpoint({
    description: "Returns all custom lobbies.",
    request: {},
    response: [
        {
            status: "success",
            data: Type.Object({
                battles: Type.Array(customBattle),
            }),
        },
    ],
});
