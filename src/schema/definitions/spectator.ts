import { Type } from "@sinclair/typebox";

import { userId } from "@/schema/definitions/userId";

export const spectator = Type.Object(
    {
        userId: Type.Ref(userId),
        name: Type.String({ description: "Name of the player, must be unique just like userId" }),
        rank: Type.Integer(),
        countryCode: Type.String(),
    },
    { $id: "spectator" }
);
