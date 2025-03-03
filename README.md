# Tachyon

Tachyon is the name of this protocol, designed to replace the old [Spring Lobby Protocol](https://springrts.com/dl/LobbyProtocol/ProtocolDescription.html), primarily intended for use in [Beyond All Reason](https://github.com/beyond-all-reason/Beyond-All-Reason). It describes the message schema that clients should use to communicate with the master server and vice-versa. The exchange format is JSON sent over a WebSocket connection. [JSONSchema](https://json-schema.org/) is used to define the structure of commands, which can be found in the [schema](schema) directory. Server and client implementations of this protocol are encouraged to use a [JSONSchema validator](https://json-schema.org/implementations.html#validators) to validate and sanitize message requests and responses.

## Terminology

| Term               | Meaning                                                                                                                         |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------|
| AI                 | User-owned game AI instances, e.g. ScavengersAI or BARbarianAI. Can only exist within lobbies/battles                           |
| Autohost           | A bot which is specifically intended to host battles                                                                            |
| AutohostClient     | An autohost instance that is connected to the server                                                                            |
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
| UserClient         | A registered user that is connected to the server                                                                               |

## Authentication and Authorization

Tachyon uses [OAuth 2](https://oauth.net/2/) for authenticating and authorizing clients. The OAuth token should then be sent in the WebSocket connection request which the Tachyon server should validate and permit the connection if valid, or close the connection if not.

[The full auth process is detailed here.](docs/authorization.md)

## Connection

See [connection](docs/connection.md) for details on how to establish the WebSocket connection to the server.

## Message Format

JSON messages in this protocol are referred to as "commands".

Every command shares the following properties:

| Property   | Type   | Description                                                                           |
| ---------- | ------ | ------------------------------------------------------------------------------------- |
| commandId  | string | The identifier of this command's type, e.g. `lobby/create/request`                    |
| messsageId | string | A unique identifier for a pair of request/response commands which links them together |

### Requests

Request commands can be sent from either side, and expect the other side to send a correlating response command. They are typically used when asking the other side to perform an action or fetch some data which they require, or simply to acknowledge their request has been fulfilled.

Every request command contains these additional properties:

| Property        | type   | Description                                      |
| --------------- | ------ | ------------------------------------------------ |
| data (optional) | object | A object containing data specific to the command |

### Responses

Sent in response to a request.

Every response command contains these additional properties:

| Property                       | type                  | Description                                                                                              |
|--------------------------------|-----------------------|----------------------------------------------------------------------------------------------------------|
| status                         | "success" \| "failed" | A object containing data specific to the command. This may be omitted if the command does not require it |
| data (optional)                | object                | Command-specific data object. Only present for "success" responses                                       |
| reason (if status is "failed") | string                | An error code only present for "failed" responses                                                        |

All `failed` responses that are initiated by a request can return one of the following `reason`s, even though not explicitly defined in each command's definition file:

| Reason                | Description                                                                                |
|-----------------------|--------------------------------------------------------------------------------------------|
| unauthorized          | When a client sends a request command of which they do not have the `role` required to use |
| internal_error        | When the server fails to handle the request in some way                                    |
| invalid_request       | When the request command doesn't match the schema                                          |
| command_unimplemented | When the server hasn't implemented a response handler for the command                      |

### Events

Events are commands which require no response. They are typically sent when the sending party does not care if the message has been acted upon, such as the server sending periodic update data.

Every event command contains these additional properties:

| Property        | type   | Description                                      |
| --------------- | ------ | ------------------------------------------------ |
| data (optional) | object | A object containing data specific to the command |

## Schema

<!-- COMMAND_SCHEMA_PLACEHOLDER_START_DO_NOT_REMOVE -->
  - [autohost](docs/schema/autohost.md)
  - [battle](docs/schema/battle.md)
  - [friend](docs/schema/friend.md)
  - [matchmaking](docs/schema/matchmaking.md)
  - [messaging](docs/schema/messaging.md)
  - [system](docs/schema/system.md)
  - [user](docs/schema/user.md)
<!-- COMMAND_SCHEMA_PLACEHOLDER_END_DO_NOT_REMOVE -->

## Contributing

The [dist](dist) and [docs/schema](docs/schema) directories are automatically generated based on the files in [src/schema](src/schema). The source files are written in [TypeScript](https://www.typescriptlang.org/) for [Node.js](https://nodejs.org/en), using the [TypeBox](https://github.com/sinclairzx81/typebox) library for JSONSchema generation.
