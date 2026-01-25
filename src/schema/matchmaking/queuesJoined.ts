import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "Indicate the player has been added to some queues by someone else. This happens in a party settings.",
    event: {
        data: Type.Object({
            queues: Type.Array(Type.String(), { minItems: 1 }),
        }),
    },
});
