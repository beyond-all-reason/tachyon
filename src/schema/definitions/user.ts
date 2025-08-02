import { Type } from "@sinclair/typebox";

import { userId } from "@/schema/definitions/userId";
import { Nullable } from "@/typebox-utils";
import { UnionEnum } from "@/union-enum";

export const user = Type.Object(
    {
        userId: Type.Ref(userId),
        username: Type.String(),
        displayName: Type.String(),
        clanId: Nullable(Type.String()),
        countryCode: Type.Optional(Type.String()),
        status: UnionEnum(["offline", "menu", "playing", "lobby"]),
        rating: Type.Optional(
            Type.Object({
                value: Type.Number({
                    description: "Key is omitted when the player isn't rated yet.",
                }),
            })
        ),
    },
    { $id: "user" }
);
