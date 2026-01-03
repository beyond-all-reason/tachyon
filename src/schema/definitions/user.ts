import { Type } from "@sinclair/typebox";

import { Nullable } from "@/typebox-utils";
import { UnionEnum } from "@/union-enum";

export const user = Type.Object(
    {
        userId: Type.Ref("userId"),
        username: Type.String(),
        displayName: Type.String(),
        clan: Nullable(Type.Ref("clanBaseData")),
        countryCode: Type.Optional(Type.String()),
        status: UnionEnum(["offline", "menu", "playing", "lobby"]),
        rating: Type.Optional(
            Type.Object({
                value: Type.Number({
                    description: "Key is omitted when the player isn't rated yet.",
                }),
            })
        ),
        roles: Type.Optional(
            Type.Array(
                UnionEnum([
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
