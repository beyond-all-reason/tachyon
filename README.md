# Tachyon

Tachyon is the name of the protocol designed to replace the old [Spring Lobby Protocol](https://springrts.com/dl/LobbyProtocol/ProtocolDescription.html), primarily for use in Beyond All Reason. It describes the message schema that clients should use to communicate with the master server and vice-versa. The exchange format is essentially JSON sent over a WebSocket connection. [JSONSchema](https://json-schema.org/) is used to define the structure of messages, which can be found in the [dist](dist) directory. Server and client implementations of this protocol are encouraged to use a [JSONSchema validator](https://json-schema.org/implementations.html#validators) to validate and sanitize message requests and responses.

[Schema Reference](docs/README.md)

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

## Contributing

The [dist](dist) and [docs](docs) directories are automatically generated based on the files in [src](src). The source files are written in (TypeScript)[https://www.typescriptlang.org/] for [Node.js](https://nodejs.org/en), using the [TypeBox](https://github.com/sinclairzx81/typebox) library for JSONSchema generation.

A schema file looks like this:

```ts
import { Type } from "@sinclair/typebox";
import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    description: "Registers a new account.",
    requiresLogin: false, // if omitted, defaults to true
    request: {
        // data property is optional
        data: Type.Object(
            {
                email: Type.String({ format: "email" }), // JSONSchema supports a number of options for each data type
                username: Type.String(),
                hashedPassword: Type.String(),
            },
            {
                // examples will be shown in the generated documentation
                examples: [
                    {
                        email: "bob@test.com",
                        username: "bob",
                        hashedPassword: "1b311ff1a6af12fba8720bd2ce02c960",
                    },
                ],
            }
        ),
    },
    response: [
        { status: "success" }, // can also add data here
        { status: "failed", reason: "email_taken" },
        { status: "failed", reason: "username_taken" },
        { status: "failed", reason: "invalid_username" },
    ],
});
```

### Endpoint Options

| Option        | Type    | Description                                                  |
| ------------- | ------- | ------------------------------------------------------------ |
| request       | object  | The request schema for this endpoint                         |
| response      | object  | The response schema for this endpoint                        |
| description   | string  | A description of what this endpoint is for                   |
| requiresLogin | boolean | Does the endpoint require the client to be logged in         |
| requiresRole  | string  | If specified, only users with this role can use the endpoint |
| order         | number  | Determines the order endpoint appears in the docs            |

If `request` is omitted, then this describes an endpoint of which the server can send a `response` for at any time, and the client should be ready to handle it. Similarly, if `response` is omitted, this describes an endpoint of which the client should not expect a response, however, the server may still send one, typically for failed responses.

### Responses

A response command has a `status` property which can either be `success` or `failed`. `success` responses have an optional `data` property, and `failed` responses have a `reason` string, which should be a non-whitespace code representing the reason the command failed. This allows clients to provide their own i18n text.

All `failed` responses can return one of the following `reason`, even though not explicitly defined in each command definition:

| Reason          | Description                                                                                |
| --------------- | ------------------------------------------------------------------------------------------ |
| unauthorized    | When a client sends a request command of which they do not have the `role` required to use |
| internal_error  | When the server fails to handle the request in some way, typically sent in a `catch` block |
| invalid_command | When the request command doesn't match the schema                                          |
