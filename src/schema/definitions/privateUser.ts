import Type from "typebox";

import { Nullable } from "@/typebox-utils.js";

const noMatchmaking = Type.Object({
    state: Type.Literal("no_matchmaking"),
});

const queueing = Type.Object({
    state: Type.Literal("queuing"),
    queues: Type.Array(
        Type.Object({
            id: Type.String(),
            version: Type.String(),
        }),
        { minItems: 1 }
    ),
});

const foundMatch = Type.Object({
    state: Type.Literal("found"),
    queue: Type.Object({
        id: Type.String(),
        version: Type.String(),
        timeoutAt: Type.Ref("unixTime"),
        hasAlreadyReadied: Type.Boolean(),
    }),
    otherQueues: Type.Array(
        Type.Object({
            id: Type.String(),
            version: Type.String(),
        })
    ),
});

export const privateUser = Type.Intersect(
    [
        Type.Ref("user"),
        Type.Object({
            party: Nullable(Type.Ref("partyState")),
            invitedToParties: Type.Array(Type.Ref("partyState")),
            friendIds: Type.Array(Type.Ref("userId")),
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
            ignoreIds: Type.Array(Type.Ref("userId")),
            currentBattle: Type.Optional(Type.Ref("privateBattle")),
            currentLobby: Nullable(Type.Ref("lobbyId")),
            clanInvites: Type.Array(Type.Ref("clanId")),
            matchmaking: Type.Union([noMatchmaking, queueing, foundMatch]),
        }),
    ],
    { $id: "privateUser" }
);
