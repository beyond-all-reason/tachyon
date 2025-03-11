import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { partyState } from "@/schema/definitions/partyState";
import { unixTime } from "@/schema/definitions/unixTime";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "New player joined the party (accepted an invite)",
    event: {
        data: Type.Composite([
            Type.Object({
                userId: Type.Ref(userId),
                joinedAt: Type.Ref(unixTime),
            }),
            partyState,
        ]),
    },
});
