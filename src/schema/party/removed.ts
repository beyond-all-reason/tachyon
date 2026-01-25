import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "Client has been removed from the party. Either kicked, the invite was cancelled or the party disapeared.",
    event: {
        data: Type.Object({
            partyId: Type.Ref("partyId"),
        }),
    },
});
