import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { partyState } from "@/schema/definitions/partyState";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "A player has been invited to the party. Sent to the invited player and all party members.",
    event: {
        data: Type.Object({
            party: Type.Ref(partyState),
        }),
    },
});
