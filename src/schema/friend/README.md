# Friend

This namespace is for friendlist retrieval and manipulation. It consist of
requests/responses mimicking basic CRUD features, with the associated events
to let the peer know when something has changed.

These events are automatically sent to the clients if they are connected. To
catch up at connection, a client should request `friend/list` to get a full
state.
