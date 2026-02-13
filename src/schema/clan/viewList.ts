import Type from "typebox";

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
                clanList: Type.Array(Type.Ref("clanBaseData")),
            }),
        },
    ],
});
