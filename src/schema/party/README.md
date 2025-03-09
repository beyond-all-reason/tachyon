# Party

Parties are groups of connected players. They are used to join matchmaking
together and during lobby balancing.

A player can only be in at most one party at any given time.

Any player in a party can invite any other connected player. When an invite is
sent, the target player as well as every party member gets an event
[party/invited](#invited). If the party is at capacity, sending an invite will fail.

Any pending invite can be cancelled by any member in the party with the request
[party/cancelInvite](#cancelInvite). Afterward, an event [party/inviteCancelled](#inviteCancelled) will be sent
to all party members and invited players. When the last member of a party leaves, the party
is disbanded and the cancelInvite event is sent to all players with a pending invite.

Accepting an invite can be done with [party/acceptInvite](#acceptInvite), and will be followed
by an event [party/memberJoined](#memberJoined) sent to all members and players with pending
invites. Declining is done with [party/declineInvite](#declineInvite) and will be followed by
[party/inviteDeclined](#inviteDeclined). Invites will time out after a while.

Any member in a party can kick any other member with the request [party/kickMember](#kickMember).
An event [party/memberLeft](#memberLeft) with the reason `kicked` will then be sent to all members and invited players.

Similarly, any member can leave the party they are currently in with [party/leave](#leave),
and the event [party/left](#left) will follow for all remaining members.

# Limitations and expansions

As time of writing, this spec doesn't have any concept of leader, any party member can do all actions.
Maybe in the future, we may want to restrict some things, like only leader can join games/matchmaking
or invite/cancel invites.

We also discussed a concept of public parties, where anyone could join. This may be a future extension
but is out of scope for now.
