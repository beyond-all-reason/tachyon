import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { customBattle } from "@/schema/types";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Server sends an array of partial battle objects whenever a subscribed battle changes in some way.",
    event: {
        data: Type.Object({
            battles: Type.Array(
                Type.Partial(customBattle, {
                    examples: [
                        {
                            title: "3v3 | Newbies only",
                            limits: {
                                minTeamsize: 3,
                                maxTeamsize: 3,
                                minRating: null,
                                maxRating: 25,
                            },
                        },
                    ],
                })
            ),
        }),
    },
});
