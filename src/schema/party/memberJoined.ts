import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { unixTime } from "@/schema/definitions/unixTime";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "New player joined the party (accepted an invite)",
    event: {
        data: Type.Object({
            userId: Type.Ref(userId),
            joinedAt: Type.Ref(unixTime),
        }),
    },
});
