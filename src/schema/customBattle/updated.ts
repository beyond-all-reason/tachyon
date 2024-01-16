import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers";
import { customBattle } from "@/schema/types";

export default defineEndpoint({
    description:
        "Server sends an array of partial battle objects whenever a subscribed battle changes in some way.",
    response: [
        {
            status: "success",
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
    ],
});
