import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { partyId } from "@/schema/definitions/partyId";
import { unixTime } from "@/schema/definitions/unixTime";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "query party information. Only members and invited players can query the party.",
    request: {
        data: Type.Object({
            partyId: Type.Ref(partyId),
        }),
    },
    response: [
        {
            status: "success",
            data: Type.Object({
                members: Type.Array(
                    Type.Object({
                        userId: Type.Ref(userId),
                        joinedAt: Type.Ref(unixTime),
                    })
                ),
                invited: Type.Array(
                    Type.Object({
                        userId: Type.Ref(userId),
                        invitedAt: Type.Ref(unixTime),
                    })
                ),
            }),
        },
        { status: "failed", reason: "invalid_party" },
    ],
});
