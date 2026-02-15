# Lobby

A lobby is a place where players can chat and setup a game before going into it.
A player can only be in at most one lobby at a time.


## Updates with JSON patch

For updates, we are using json merge patch [RFC 7386](https://www.rfc-editor.org/rfc/rfc7386.html).
These are used for [lobby/listUpdated](#listUpdated) and [lobby/updated](#updated) events. More
on them below.

An example of json patch:

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


## Lobby details

[lobby/create](#create) is used to create and join a lobby. When you create a lobby
you also automatically becomes the first player in the first allyTeam.

For other player to join a lobby, they need the lobby ID with [lobby/join](#join),
this operation is idempotent. Attempting to join a different lobby while being
in a lobby will fail with `invalid_request`.

Upon joining, clients receive the full state of the lobby as
response and will automatically get [lobby/updated](#updated) events when
something changes. There is no need to subscribe or unsubscribe to this event,
lobby membership is equivalent to subscription.
This event follow the same json merge patch structure.
As such, arrays like teams are represented using objects, where the items
are ordered based on their keys.

A player can use [lobby/leave](#leave) to leave the lobby, but can also be forcibly removed
from a lobby, in which case they would receive [lobby/left](#left) event. This can
happen when the player is kicked, or if the lobby crashed. In this case, the client should
consider no longer in the lobby. This event is only sent to the player that was removed.
It will not be sent when the client leave using [lobby/leave](#leave).

When a lobby is empty, it is automatically disposed off.


### Lobby members

Joining a lobby puts the user as a spectator.
They can then use [lobby/joinAllyTeam](#joinAllyTeam) to join a specific ally team.
If the target ally team is full, the request fails and nothing happen. `joinAllyTeam` can also be used
to change team. Similarly, if the ally team is full, the request fails and nothing happen.

A member can also choose to join the waiting queue of the lobby with [lobby/joinQueue](#joinQueue). This can be used when all ally teams are full, and/or when the user doesn't care which ally team they should join.
A member in the join queue is represented as a spectator with `{joinQueuePosition: number()}`. The join queue
positions may not be consecutive. The following is possible:

```
spectators: {
    "123": {"id": "123", "joinQueuePosition": 3}
    "456": {"id": "456", "joinQueuePosition": 1}
    "789": {"id": "789", "joinQueuePosition": 10}
}
```

When a suitable ally team has a free spot for a waiting player, the server will automatically put them
in that spot and update its state through [lobby/updated](#updated).
A member simply spectating and not waiting to play will have a null `joinQueuePosition`.
To leave an ally team or the join queue and become a spectator, a user should use [lobby/spectate](#spectate).

Clients can send a [lobby/updateClientStatus](#updateClientStatus) request to notify others if they are ready
and if they need to download some assets, like engine, map or game. When a user becomes a player (at lobby creation,
through `joinAllyTeam` or with the join queue), the server will automatically assign them a default status
`{"isReady": false, "assetStatus": "ready"}`. If this is incorrect the client should send a request to correct it.


### Lobby updates

Any member can update most (any?) property of the lobby. Updates are all or nothing, if updating a proprety
is not possible (invalid or forbidden), then no update take place.
The result of the updates is then transmitted to all members via [lobby/updated](#updated) events.

When an operation requires a vote, the vote data is also transmitted with [lobby/updated](#updated) events.
And when the vote ends, a [lobby/voteEnded](#voteEnded) event is sent to all lobby members. This is to simplify
client logic if they want to show a notification in addition to the updated state.

## List of all lobbies

Other players can get the list of lobbies through [lobby/subscribeList](#subscribeList). After being
subscribed they receive [lobby/listUpdated](#listUpdated) events.
This allow clients to maintain a list of lobbies on their side.
The event [lobby/listReset](#listReset) holds the full list of lobbies. Upon receiving this
event, a client should set its internal list of lobbies according to this event.
In practice, this event should rarely be seen.
