import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Create a clan.",
    request: {
        data: Type.Object({ clanBaseData: Type.Ref("clanBaseData") }),
    },
    response: [{ status: "success" }],
});
