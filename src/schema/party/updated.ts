import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "New player joined the party (accepted an invite)",
    event: {
        data: Type.Ref("partyState"),
    },
});
