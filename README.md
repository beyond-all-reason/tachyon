# Tachyon

Tachyon is the name of this protocol, designed to replace the old [Spring Lobby Protocol](https://springrts.com/dl/LobbyProtocol/ProtocolDescription.html), primarily intended for use in [Beyond All Reason](https://github.com/beyond-all-reason/Beyond-All-Reason). It describes the message schema that clients should use to communicate with the master server and vice-versa. The exchange format is JSON sent over a WebSocket connection. [JSONSchema](https://json-schema.org/) is used to define the structure of commands, which can be found in the [dist](dist) directory. Server and client implementations of this protocol are encouraged to use a [JSONSchema validator](https://json-schema.org/implementations.html#validators) to validate and sanitize message requests and responses.

## Terminology

| Term               | Meaning                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| AI                 | User-owned game AI instances, e.g. ScavengersAI or BARbarianAI. Can only exist within lobbies/battles                           |
| Autohost           | A bot which is specifically intended to host battles                                                                            |
| Battle             | Either custom or matchmaking                                                                                                    |
| Bot                | An automated UserClient, marked as a bot                                                                                        |
| Client             | A WebSocket client that communicates with the Tachyon server via the Tachyon protocol                                           |
| Client Application | Top level application that connectsE.g. SpringLobby, Chobby, BAR Lobby                                                          |
| Command            | The JSON data sent in a message. The shape of these objects are primarily what this Tachyon schema describes                    |
| Command ID         | The unique string which represents the command type. E.g. `system/connected/response` or `lobby/join/request`                   |
| Endpoint           | Represents a request->response command or a single response command E.g. `register`, `login` or `join`                          |
| Engine             | A version of the engine (Recoil), e.g. `105.1.1-1544-g058c8ea BAR105`                                                           |
| Host               | The host of a battle. Typically these users are bots                                                                            |
| Game               | A version of the core game files, e.g. `Beyond All Reason test-22425-e6c0e37`                                                   |
| Lobby              | A room or waiting area from which a Battle can be launched, one Lobby can have multiple Battles over the course of its lifetime |
| Message            | The request/response sent over the network that contains a command                                                              |
| Message ID         | A unique identifier for a pair of request/response commands which links them together                                           |
| Server             | The provider of the protocol and what clients connect to. i.e. the master/middleware server                                     |
| Service            | A collection of endpoints that are categorically related, E.g. `user` or `lobby`                                                |
| User               | Syonymous with an account, and strictly represents the data which is stored in the server database                              |
| UserClient         | A registered user who is online                                                                                                 |

## Docs

-   [Authentication and Authorization](docs/authorization.md)
-   [Message Structure](docs/commands.md)
-   Commands
    <!-- COMMAND_SCHEMA_PLACEHOLDER_START_DO_NOT_REMOVE -->
    -   [autohost](docs/schema/autohost.md)
    -   [game](docs/schema/game.md)
    -   [lobby](docs/schema/lobby.md)
    -   [matchmaking](docs/schema/matchmaking.md)
    -   [system](docs/schema/system.md)
    -   [user](docs/schema/user.md)
    <!-- COMMAND_SCHEMA_PLACEHOLDER_END_DO_NOT_REMOVE -->

## Contributing

The [dist](dist) and [docs/schema](docs/schema) directories are automatically generated based on the files in [src/schema](src/schema). The source files are written in [TypeScript](https://www.typescriptlang.org/) for [Node.js](https://nodejs.org/en), using the [TypeBox](https://github.com/sinclairzx81/typebox) library for JSONSchema generation.
