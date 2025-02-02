import { Type } from "@sinclair/typebox";

import { privateBattle } from "@/schema/definitions/privateBattle";
import { user } from "@/schema/definitions/user";
import { Nullable } from "@/typebox-utils";

export const privateUser = Type.Intersect(
    [
        Type.Ref(user),
        Type.Object({
            partyId: Nullable(Type.String()),
            friendIds: Type.Array(Type.String()),
            outgoingFriendRequestIds: Type.Array(Type.String()),
            incomingFriendRequestIds: Type.Array(Type.String()),
            ignoreIds: Type.Array(Type.String()),
            currentBattle: Type.Optional(Type.Ref(privateBattle)),
        }),
    ],
    { $id: "privateUser" }
);
