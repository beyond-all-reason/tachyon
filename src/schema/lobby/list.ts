import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
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
