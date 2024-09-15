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
        partyId: Nullable(Type.String()),
        scopes: Type.Array(Type.String()),
        countryCode: Type.Optional(Type.String()),
        status: UnionEnum(["offline", "menu", "playing", "lobby"]),
    },
    { $id: "user" }
);
