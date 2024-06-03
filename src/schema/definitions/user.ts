import { Type } from "@sinclair/typebox";

import { userId } from "@/schema/definitions/userId";
import { Nullable } from "@/typebox-utils";

export const user = Type.Object(
    {
        userId: Type.Ref(userId),
        username: Type.String(),
        displayName: Type.String(),
        clanId: Nullable(Type.String()),
        partyId: Nullable(Type.String()),
        scopes: Type.Array(Type.String()),
        countryCode: Type.Optional(Type.String()),
        status: Type.Union([Type.Literal("offline"), Type.Literal("menu"), Type.Literal("playing"), Type.Literal("lobby")]),
    },
    { $id: "user" }
);
