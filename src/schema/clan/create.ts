import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Create a clan.",
    request: {
        data: Type.Object({
            clanUpdateableBaseData: Type.Ref("clanUpdateableBaseData"),
        }),
    },
    response: [{ status: "success" }],
});
