# Lobby

A lobby is a place where players can chat and setup a game before going into it.
A player can only be in at most one lobby at a time.

[lobby/create](#create) is used to create and join a lobby. Other players can get
the list of lobbies through [lobby/subscribeList](#subscribeList). After being
subscribed they receive [lobby/listUpdated](#listUpdated) events. This allow clients
to maintain a list of lobbies on their side.


For other player to join a lobby, they need the lobby ID with [lobby/join](#join),
this operation is idempotent. They receive the full state of the lobby as
response and will automatically get [lobby/updated](#updated) events when
something changes. The updated events follow json merge patch [RFC 7386](https://www.rfc-editor.org/rfc/rfc7386.html)
structure. As such, arrays like teams are represented using objects, where the items
are ordered based on their keys.
For example:

```json
{
    "players": {
        "01": {"id": "123"},
        "02": {"id": "456"}
    }
}
```
is the representation of
```json
{
    "players": [{"id": "123"}, {"id": "456"}]
}
```

Removing the first player can be represented by the following patch objects (they are equivalent):

```json
{
    "players": {
        "01": {"id": "456"},
        "02": null
    }
}

{
    "players": {
        "01": null
    }
}
```
