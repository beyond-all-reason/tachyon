# Lobby

A lobby is a place where players can chat and setup a game before going into it.
A player can only be in at most one lobby at a time.

[lobby/create](#create) is used to create and join a lobby. When you create a lobby
you also automatically becomes the first player in the first allyTeam.
Other players can get the list of lobbies through [lobby/subscribeList](#subscribeList). After being
subscribed they receive [lobby/listUpdated](#listUpdated) events. These events
follow json merge patch [RFC 7386](https://www.rfc-editor.org/rfc/rfc7386.html).
This allow clients to maintain a list of lobbies on their side.
The event [lobby/listReset](#listReset) holds the full list of lobbies. Upon receiving this
event, a client should set its internal list of lobbies according to this event.
In practice, this event should rarely be seen.


For other player to join a lobby, they need the lobby ID with [lobby/join](#join),
this operation is idempotent. Attempting to join a different lobby while being
in a lobby will fail with `invalid_request`. Joining a lobby puts you in the spectator
queue by default. Use [lobby/joinAllyTeam](#joinAllyTeam) and [lobby/spectate](#spectate)
to move between ally teams and spectator queue.
Upon joining, clients receive the full state of the lobby as
response and will automatically get [lobby/updated](#updated) events when
something changes. Similar to the listUpdated events, these follow the same json merge patch
structure. As such, arrays like teams are represented using objects, where the items
are ordered based on their keys.
For example:

```json
{
    "teams": {
        "01": {"maxPlayers": 1},
        "02": {"maxPlayers": 2}
    }
}
```
is the representation of
```json
{
    "teams": [{"maxPlayers": 1}, {"maxPlayers": 2}]
}
```

Removing the first team can be represented by the following patch objects (they are equivalent):

```json
{
    "teams": {
        "01": {"maxPlayers": 2},
        "02": null
    }
}

{
    "teams": {
        "01": null
    }
}
```

A player can use [lobby/leave](#leave) to leave the lobby, but can also be forcibly removed
from a lobby, in which case they would receive [lobby/left](#left) event. This can
happen when the player is kicked, or if the lobby crashed. In this case, the client should
consider no longer in the lobby. This event is only sent to the player that was removed.
It will not be sent when the client leave using [lobby/leave](#leave).

When a lobby is empty, it is automatically disposed off.


### Lobby members

A lobby has a list of members, that can be either `player` or `spec` (spectator).
The list of member is an object keyed by the member's id. Any update to members
follow json patch approach.
For spectator, the clients should order them by increasing `queuePosition`. There
is no guarantee that these positions are consecutives. The following is possible:

`members: {
    "123": {"type": "spec", "queuePosition": 3}
    "456": {"type": "spec", "queuePosition": 1}
    "789": {"type": "spec", "queuePosition": 10}
}`
