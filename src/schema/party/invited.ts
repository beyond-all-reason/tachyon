import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { unixTime } from "@/schema/definitions/unixTime";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "A player has been invited to the party. Sent to the invited player and all party members.",
    event: {
        data: Type.Object({
            invitedUserId: Type.Ref(userId),
            invitedAt: Type.Ref(unixTime),
        }),
    },
});
