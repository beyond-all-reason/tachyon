# Connection

The connection to the server is established via a WebSocket. This page specifies the details of the connection, including the path, authorization, version negotiation, keep-alive, and message encoding.

## Path

The WebSocket connection is established at the following path:

```
wss://<server>/tachyon
```

If the server is running on `localhost`, a non-secure `ws://` should be used instead.

## Authorization

The WebSocket connection requires authorization. The full auth process is detailed [here](authorization.md). The `Authorization` header must be set to the access token obtained from the auth process following the `Bearer` scheme.

## Tachyon version negotiation

The client must specify as list of supported tachyon versions in the `Sec-WebSocket-Protocol` header. The server will then select the highest version supported by both the client and server. If the server does not support any of the versions specified by the client, the connection will be closed.

The name of the websocket subprotocol is `{version}.tachyon`.

The version string is in the format `v{major}[.{minor}]`, where `major` and `minor` are integers. The `minor` part is optional, and if omitted, it is assumed to be `0`.

Because the minor versions of the protocol are only additional extensions, that are optional, server must accept a connection with a higher minor version than it supports if the major version is the same.

> [!NOTE]
> Currently, during the active development phase of protocol, the only supported version is `v0`.

## Connection keep-alive

The server must use the WebSocket built-in ping/pong mechanism to keep the connection alive. The client must respond to the server's pings with a pong message.

The frequency of pings must be at least 1 every 10 seconds, and preferably randomized to some degree.

## Connection termination

In case something goes wrong and the connection has to be terminated, the peer should
close the connection with the code `1008` for [policy violation](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4).
The peer should also send a short description of the error as a simple string in the [close frame body](https://www.rfc-editor.org/rfc/rfc6455.html#section-5.5.1).

Some example of errors: a peer cannot parsed the received json, the connection times out, the peer crashed with an unrecoverable error and so on.


## Messages encoding

The JSON messages sent over the WebSocket connection must be encoded using UTF-8 framing.
