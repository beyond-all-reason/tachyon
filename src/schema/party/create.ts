import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { partyId } from "@/schema/definitions/partyId";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Create a party.",
    request: {},
    response: [
        {
            status: "success",
            data: Type.Object({
                partyId: Type.Ref(partyId),
            }),
        },
    ],
});
