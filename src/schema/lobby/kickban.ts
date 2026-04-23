import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Ban a user from a lobby (and kick them out)",
    request: {
        data: Type.Object({
            userId: Type.Ref("userId"),
            banUntil: Type.Optional(
                Type.Ref("unixTime", {
                    description:
                        "omit this field (or set it in the past) to merely kick the player",
                })
            ),
        }),
    },
    response: [{ status: "success" }],
});
