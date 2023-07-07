import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";
import { lobby } from "@/schema/types";

export default defineEndpoint({
    description: "Returns all custom lobbies.",
    request: {},
    response: [
        {
            status: "success",
            data: Type.Object({
                lobbies: Type.Array(lobby),
            }),
        },
    ],
});
