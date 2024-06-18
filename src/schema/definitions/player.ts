import { Type } from "@sinclair/typebox";

import { userId } from "@/schema/definitions/userId";

export const player = Type.Object(
    {
        userId: Type.Ref(userId),
        name: Type.String({ description: "Name of the player, must be unique just like userId" }),
        password: Type.String(),
        rank: Type.Optional(Type.Integer()),
        countryCode: Type.Optional(Type.String()),
        customOptions: Type.Optional(Type.Record(Type.String(), Type.String())),
    },
    { $id: "player" }
);
