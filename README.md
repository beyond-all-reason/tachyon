# Tachyon

Tachyon is the name of the protocol designed to replace the old [Spring Lobby Protocol](https://springrts.com/dl/LobbyProtocol/ProtocolDescription.html), primarily for use in Beyond All Reason. It describes the message schema that clients should use to communicate with the master server and vice-versa. The exchange format is essentially JSON sent over a WebSocket connection. [JSONSchema](https://json-schema.org/) is used to define the structure of messages, which can be found in the [dist](dist) directory. Server and client implementations of this protocol are encouraged to use a [JSONSchema validator](https://json-schema.org/implementations.html#validators) to validate and sanitize message requests and responses.

[Schema Documentation](docs/README.md)

## Connecting

When connecting to the WebSocket server, the server should send a [`system/version/response`](docs/system.md/#version) command containing the version of the Tachyon protocol that is being served. Clients should ensure their implementation is using the same version of the protocol, which can be found in this repo's [`package.json`](package.json). Once connected, follow the instructions in the [account](docs/account.md) service to register and login in order to gain authorization to the rest of the protocol.

## Terminology

| Term               | Meaning                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Client             | A WebSocket client                                                                                                              |
| Client Application | E.g. SpringLobby, Chobby, BAR Lobby                                                                                             |
| Server             | The provider of the protocol and what clients connect to. i.e. the master or middleware server                                  |
| Command            | A JSON message relating to a specific endpoint                                                                                  |
| Command ID         | The unique string which represents the message type. E.g. `user/login/request` or `lobby/join/response`                         |
| Endpoint           | E.g. `register`, `login` or `join`                                                                                              |
| Service            | A collection of endpoints that are categorically related, E.g. `user` or `lobby`                                                |
| UserClient         | Specifically a registered user who is online                                                                                    |
| Bot                | An automated UserClient, marked as a bot                                                                                        |
| Autohost           | A bot which is specifically intended to host battles                                                                            |
| Lobby              | A room or waiting area from which a Battle can be launched, one Lobby can have multiple Battles over the course of its lifetime |
| Battle             | Either custom or matchmaking. Ingame status is irrelevant from a protocol perspective                                           |
| Founder            | The user hosting a battle. Typically these users are bots                                                                       |
| Game               | A version of the core game files, e.g. `Beyond All Reason test-22425-e6c0e37`                                                   |
| Engine             | A version of the engine (Recoil), e.g. `105.1.1-1544-g058c8ea BAR105`                                                           |
| AI                 | User-owned game AI instances, e.g. ChickensAI. Can only exist within battles                                                    |
