import Type from "typebox";

import { Nullable } from "@/typebox-utils.js";

const clanUpdate = Type.Object({
    clanId: Type.Optional(Type.Ref("clanId")),
    name: Type.Optional(Type.String({ maxLength: 30 })),
    tag: Type.Optional(Type.String({ minLength: 3, maxLength: 10 })),
    language: Type.Optional(Type.String()),
});

export const user = Type.Object(
    {
        userId: Type.Ref("userId"),
        username: Type.String(),
        displayName: Type.String(),
        clanBaseData: Type.Optional(Nullable(clanUpdate)),
        countryCode: Type.Optional(Type.String()),
        status: Type.Enum(["offline", "menu", "playing", "lobby"]),
        rating: Type.Optional(
            Type.Object({
                value: Type.Number({
                    description: "Key is omitted when the player isn't rated yet.",
                }),
            })
        ),
        roles: Type.Optional(
            Type.Array(
                Type.Enum([
                    "contributor",
                    "admin",
                    "moderator",
                    "tournament_winner",
                    "tournament_caster",
                ]),
                { uniqueItems: true }
            )
        ),
    },
    { $id: "user" }
);
