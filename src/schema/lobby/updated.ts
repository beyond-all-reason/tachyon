import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";
import { lobby } from "@/schema/types";

export default defineEndpoint({
    description: "Server sends this partial object whenever a lobby relevant to the client changes in some way.",
    response: [
        {
            status: "success",
            data: Type.Partial(lobby, {
                examples: [
                    {
                        name: "3v3 | Newbies only",
                        minTeamsize: 3,
                        maxTeamsize: 3,
                        minRating: null,
                        maxRating: 25,
                    },
                ],
            }),
        },
    ],
});
