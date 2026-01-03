import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Get the list of clans",
    request: {},
    response: [
        {
            status: "success",
            data: Type.Object({
                clansBaseData: Type.Array(Type.Ref("clanBaseData")),
            }),
        },
    ],
});
