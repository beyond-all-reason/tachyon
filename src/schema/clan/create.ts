import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Create a clan.",
    request: {
        data: Type.Ref("clanUpdateableData"),
    },
    response: [{ status: "success" }],
});
