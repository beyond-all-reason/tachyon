System commands to manage the connection itself and get updates from the server.

* [disconnect](#disconnect) is the event to send to the server before
stopping the connection. If the client closes the connection without first
sending this event, it will be considered as a client crash by the server.

* [disconnected](#disconnected) is the dual of `disconnect` where the server
is terminating the connection and disconnecting the user. This can happen
if the server detects a timeout, either because no activity on the connection
or the server is expecting a response to a request and hasn't received it (and
all potential retries have been exhausted). `server_error` is sent when the
server encountered a fatal error for the user and the only way to recover is
to reconnect.

* [serverStats](#serverStats) can be used to request generic, user facing data
about the server like number of connecting players.
