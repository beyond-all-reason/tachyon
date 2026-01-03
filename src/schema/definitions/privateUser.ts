import { Type } from "@sinclair/typebox";

import { Nullable } from "@/typebox-utils";

export const privateUser = Type.Intersect(
    [
        Type.Ref("user"),
        Type.Object({
            party: Nullable(Type.Ref("partyState")),
            invitedToParties: Type.Array(Type.Ref("partyState")),
            friendIds: Type.Array(Type.String()),
            outgoingFriendRequest: Type.Array(
                Type.Object({
                    to: Type.Ref("userId"),
                    sentAt: Type.Ref("unixTime"),
                })
            ),
            incomingFriendRequest: Type.Array(
                Type.Object({
                    from: Type.Ref("userId"),
                    sentAt: Type.Ref("unixTime"),
                })
            ),
            ignoreIds: Type.Array(Type.String()),
            currentBattle: Type.Optional(Type.Ref("privateBattle")),
            currentLobby: Nullable(Type.String()),
            clanInvites: Type.Array(Type.Ref("clanBaseData")),
        }),
    ],
    { $id: "privateUser" }
);
