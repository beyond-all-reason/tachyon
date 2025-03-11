import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { partyId } from "@/schema/definitions/partyId";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Accept the invite to the party",
    request: {
        data: Type.Object({
            partyId: Type.Ref(partyId),
        }),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "invalid_party" },
        { status: "failed", reason: "already_in_party" },
    ],
});
