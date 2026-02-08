import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "A player has been invited to a clan. Sent to the invited player.",
    event: {
        data: Type.Intersect([Type.Ref("clanUpdateableBaseData")]),
    },
});
