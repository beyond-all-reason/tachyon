# Party

Parties are groups of connected players. They are used to join matchmaking
together and during lobby balancing.

A player can only be in at most one party at any given time.
When the last member of a party leaves, the party is disbanded.

Any change to the party member or the pending invites is propagated with a [party/updated](#updated) event sent
to all connected members and invited players.

Any player in a party can invite any other connected player with [party/invite](#invite). If the party is at capacity, sending an invite will fail.
Any pending invite can be cancelled by any member in the party with the request
[party/cancelInvite](#cancelInvite).
Accepting an invite can be done with [party/acceptInvite](#acceptInvite). Declining is done with [party/declineInvite](#declineInvite). Invites will time out after a while.

Any member in a party can kick any other member with the request [party/kickMember](#kickMember).
Similarly, any member can leave the party they are currently in with [party/leave](#leave).

# Limitations and expansions

As time of writing, this spec doesn't have any concept of leader, any party member can do all actions.
Maybe in the future, we may want to restrict some things, like only leader can join games/matchmaking
or invite/cancel invites.

We also discussed a concept of public parties, where anyone could join. This may be a future extension
but is out of scope for now.
