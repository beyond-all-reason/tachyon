import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Update your clan.",
    request: {
        data: Type.Intersect([Type.Ref("clanUpdateableData")]),
    },
    response: [{ status: "success" }],
});
