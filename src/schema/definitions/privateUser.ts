import { Type } from "@sinclair/typebox";

import { partyState } from "@/schema/definitions/partyState";
import { privateBattle } from "@/schema/definitions/privateBattle";
import { unixTime } from "@/schema/definitions/unixTime";
import { user } from "@/schema/definitions/user";
import { userId } from "@/schema/definitions/userId";
import { Nullable } from "@/typebox-utils";

export const privateUser = Type.Intersect(
    [
        Type.Ref(user),
        Type.Object({
            party: Nullable(Type.Ref(partyState)),
            invitedToParties: Type.Array(Type.Ref(partyState)),
            friendIds: Type.Array(Type.String()),
            outgoingFriendRequest: Type.Array(
                Type.Object({
                    to: Type.Ref(userId),
                    sentAt: Type.Ref(unixTime),
                })
            ),
            incomingFriendRequest: Type.Array(
                Type.Object({
                    from: Type.Ref(userId),
                    sentAt: Type.Ref(unixTime),
                })
            ),
            ignoreIds: Type.Array(Type.String()),
            currentBattle: Type.Optional(Type.Ref(privateBattle)),
        }),
    ],
    { $id: "privateUser" }
);
