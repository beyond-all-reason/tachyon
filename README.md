# Tachyon

Tachyon is the name of the protocol designed to replace the old [Spring Lobby Protocol](https://springrts.com/dl/LobbyProtocol/ProtocolDescription.html), primarily intended for use in [Beyond All Reason](https://github.com/beyond-all-reason/Beyond-All-Reason). It describes the message schema that clients should use to communicate with the master server and vice-versa. The exchange format is JSON sent over a WebSocket connection. [JSONSchema](https://json-schema.org/) is used to define the structure of messages, which can be found in the [dist](dist) directory. Server and client implementations of this protocol are encouraged to use a [JSONSchema validator](https://json-schema.org/implementations.html#validators) to validate and sanitize message requests and responses.

[Schema Reference](docs/README.md)

## Authorization

See [dedicated authorization documentation page](docs/authorization.md).

## Connecting

To connect to a Tachyon WebSocket server, the client should add a `tachyonVersion` query parameter which specifies which version of Tachyon they're using, e.g. `wss://tachyon-server.com?tachyonVersion=1.2.3`. The server should send a [`system/version/response`](docs/system.md/#version) command containing the version of the Tachyon protocol that is being served and `versionParity` field stating how it differs to the client's version. Ideally, clients should ensure their implementation is using the same version of the protocol, which can be found in this repo's [`package.json`](package.json). However, it is up to the client to decide how to handle version mismatches, and the server should not terminate clients because of a version disparity.

## Terminology

| Term               | Meaning                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Client             | A WebSocket client                                                                                                              |
| Client Application | E.g. SpringLobby, Chobby, BAR Lobby                                                                                             |
| Server             | The provider of the protocol and what clients connect to. i.e. the master or middleware server                                  |
| Command            | A JSON message relating to a specific endpoint                                                                                  |
| Command ID         | The unique string which represents the message type. E.g. `user/login/request` or `lobby/join/response`                         |
| Message ID         | A unique identifier for a pair of request/response commands which links them together                                           |
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

## Commands

Both request and response messages are referred to as "commands". A request command should always be met with a corresponding response command, however, in some cases, the server can send standalone response commands which the client did not initiate with a request. An exaple is the [`system/version/response`](docs/system.md/#version)

### Shared

Every command has the following properties:

| Property   | Type   | Description                                                                           |
| ---------- | ------ | ------------------------------------------------------------------------------------- |
| messsageId | string | A unique identifier for a pair of request/response commands which links them together |
| commandId  | string | The identifier of this command's type, e.g. `lobby/create/request`                    |

### Requests

Every request command contains these additional properties:

| Property | type   | Description                                                                                              |
| -------- | ------ | -------------------------------------------------------------------------------------------------------- |
| data     | object | A object containing data specific to the command. This may be omitted if the command does not require it |

### Responses

Every response command contains these additional properties:

| Property | type                  | Description                                                                                              |
| -------- | --------------------- | -------------------------------------------------------------------------------------------------------- |
| status   | "success" \| "failed" | A object containing data specific to the command. This may be omitted if the command does not require it |
| data     | object                | Command-specific data object. Only present for "success" responses                                       |
| reason   | string                | An error code only present for "failed" responses                                                        |

All `failed` responses that are initiated by a request can return one of the following `reason`s, even though not explicitly defined in each command's definition file:

| Reason          | Description                                                                                |
| --------------- | ------------------------------------------------------------------------------------------ |
| unauthorized    | When a client sends a request command of which they do not have the `role` required to use |
| internal_error  | When the server fails to handle the request in some way, typically sent in a `catch` block |
| invalid_command | When the request command doesn't match the schema                                          |

## Contributing

The [dist](dist) and [docs](docs) directories are automatically generated based on the files in [src](src). The source files are written in (TypeScript)[https://www.typescriptlang.org/] for [Node.js](https://nodejs.org/en), using the [TypeBox](https://github.com/sinclairzx81/typebox) library for JSONSchema generation.

A schema file looks like this:

```ts
import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    description: "Create a new lobby - intended for player clients to summon a dedicated host.",
    request: {
        data: Type.Object(
            {
                title: Type.String({ minLength: 2, maxLength: 30 }),
                private: Type.Boolean({ default: true }),
                region: Type.String(),
                maxPlayers: Type.Integer({ minimum: 0, default: 16 }),
            },
            {
                examples: [
                    {
                        title: "8v8 | All Welcome",
                        private: false,
                        region: "EU",
                        maxPlayers: 16,
                    },
                ],
            }
        ),
    },
    response: [{ status: "success" }, { status: "failed", reason: "no_hosts_available" }, { status: "failed", reason: "invalid_region" }],
});
```

### Endpoint Options

| Option        | Type    | Description                                          |
| ------------- | ------- | ---------------------------------------------------- |
| request       | object  | The request schema for this endpoint                 |
| response      | object  | The response schema for this endpoint                |
| description   | string  | A description of what this endpoint is for           |
| requiresLogin | boolean | Does the endpoint require the client to be logged in |
| order         | number  | Determines the order endpoint appears in the docs    |

If `request` is omitted, then this describes an endpoint of which the server can send a `response` for at any time, and the client should be ready to handle it. Similarly, if `response` is omitted, this describes an endpoint of which the client should not expect a response, however, the server may still send one, typically for failed responses.
