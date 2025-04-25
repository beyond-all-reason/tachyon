import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { partyId } from "@/schema/definitions/partyId";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "Client has been removed from the party. Either kicked, the invite was cancelled or the party disapeared.",
    event: {
        data: Type.Object({
            partyId: Type.Ref(partyId),
        }),
    },
});
