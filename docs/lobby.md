# Lobby

- [close](#close)
- [create](#create)
- [join](#join)
- [joined](#joined)
- [leave](#leave)
- [left](#left)
- [list](#list)
- [receiveMessage](#receivemessage)
- [sendMessage](#sendmessage)
- [updated](#updated)
---

## close

Close an existing lobby.

### request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "lobby/close/request",
    "type": "object",
    "properties": {
        "command": {
            "const": "lobby/close/request",
            "type": "string"
        }
    },
    "required": [
        "command"
    ]
}
```

</details>

#### TypeScript Definition
```ts
export interface LobbyCloseRequest {
    command: "lobby/close/request";
}

```
#### Example
```json
{
    "command": "lobby/close/request"
}
```
### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "lobby/close/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/close/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                }
            },
            "required": [
                "command",
                "status"
            ]
        },
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/close/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "const": "internal_error",
                    "type": "string"
                }
            },
            "required": [
                "command",
                "status",
                "reason"
            ]
        }
    ]
}
```

</details>

#### TypeScript Definition
```ts
export type LobbyCloseResponse =
    | {
          command: "lobby/close/response";
          status: "success";
      }
    | {
          command: "lobby/close/response";
          status: "failed";
          reason: "internal_error";
      };

```
#### Example
```json
{
    "command": "lobby/close/response",
    "status": "success"
}
```
---

## create

Create a new lobby - intended for player clients to summon a dedicated host.

### request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "lobby/create/request",
    "type": "object",
    "properties": {
        "command": {
            "const": "lobby/create/request",
            "type": "string"
        },
        "data": {
            "examples": [
                {
                    "title": "8v8 | All Welcome",
                    "private": false,
                    "region": "EU",
                    "maxPlayers": 16
                }
            ],
            "type": "object",
            "properties": {
                "title": {
                    "minLength": 2,
                    "maxLength": 30,
                    "type": "string"
                },
                "private": {
                    "default": true,
                    "type": "boolean"
                },
                "region": {
                    "type": "string"
                },
                "maxPlayers": {
                    "minimum": 0,
                    "default": 16,
                    "type": "integer"
                }
            },
            "required": [
                "title",
                "private",
                "region",
                "maxPlayers"
            ]
        }
    },
    "required": [
        "command",
        "data"
    ]
}
```

</details>

#### TypeScript Definition
```ts
export interface LobbyCreateRequest {
    command: "lobby/create/request";
    data: {
        title: string;
        private: boolean;
        region: string;
        maxPlayers: number;
    };
}

```
#### Example
```json
{
    "command": "lobby/create/request",
    "data": {
        "title": "8v8 | All Welcome",
        "private": false,
        "region": "EU",
        "maxPlayers": 16
    }
}
```
### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "lobby/create/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/create/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                }
            },
            "required": [
                "command",
                "status"
            ]
        },
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/create/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "anyOf": [
                        {
                            "const": "no_hosts_available",
                            "type": "string"
                        },
                        {
                            "const": "invalid_region",
                            "type": "string"
                        },
                        {
                            "const": "internal_error",
                            "type": "string"
                        }
                    ]
                }
            },
            "required": [
                "command",
                "status",
                "reason"
            ]
        }
    ]
}
```

</details>

#### TypeScript Definition
```ts
export type LobbyCreateResponse =
    | {
          command: "lobby/create/response";
          status: "success";
      }
    | {
          command: "lobby/create/response";
          status: "failed";
          reason: "no_hosts_available" | "invalid_region" | "internal_error";
      };

```
#### Example
```json
{
    "command": "lobby/create/response",
    "status": "success"
}
```
---

## join

Join a custom lobby. Server will send a [joined](#joined) response containing the joined lobby's data.

### request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "lobby/join/request",
    "type": "object",
    "properties": {
        "command": {
            "const": "lobby/join/request",
            "type": "string"
        },
        "data": {
            "examples": [
                {
                    "lobbyId": 27,
                    "password": "fish"
                }
            ],
            "type": "object",
            "properties": {
                "lobbyId": {
                    "type": "integer"
                },
                "password": {
                    "type": "string"
                }
            },
            "required": [
                "lobbyId"
            ]
        }
    },
    "required": [
        "command",
        "data"
    ]
}
```

</details>

#### TypeScript Definition
```ts
export interface LobbyJoinRequest {
    command: "lobby/join/request";
    data: {
        lobbyId: number;
        password?: string;
    };
}

```
#### Example
```json
{
    "command": "lobby/join/request",
    "data": {
        "lobbyId": 27,
        "password": "fish"
    }
}
```
### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "lobby/join/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/join/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                }
            },
            "required": [
                "command",
                "status"
            ]
        },
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/join/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "anyOf": [
                        {
                            "const": "locked",
                            "type": "string"
                        },
                        {
                            "const": "requires_password",
                            "type": "string"
                        },
                        {
                            "const": "invalid_password",
                            "type": "string"
                        },
                        {
                            "const": "max_participants_reached",
                            "type": "string"
                        },
                        {
                            "const": "rank_too_low",
                            "type": "string"
                        },
                        {
                            "const": "rank_too_high",
                            "type": "string"
                        },
                        {
                            "const": "banned",
                            "type": "string"
                        },
                        {
                            "const": "internal_error",
                            "type": "string"
                        }
                    ]
                }
            },
            "required": [
                "command",
                "status",
                "reason"
            ]
        }
    ]
}
```

</details>

#### TypeScript Definition
```ts
export type LobbyJoinResponse =
    | {
          command: "lobby/join/response";
          status: "success";
      }
    | {
          command: "lobby/join/response";
          status: "failed";
          reason:
              | "locked"
              | "requires_password"
              | "invalid_password"
              | "max_participants_reached"
              | "rank_too_low"
              | "rank_too_high"
              | "banned"
              | "internal_error";
      };

```
#### Example
```json
{
    "command": "lobby/join/response",
    "status": "success"
}
```
---

## joined

Sent when the client successfully joins a lobby. Can also be sent at any time by the server to forcibly make the client join a lobby.

### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "lobby/joined/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/joined/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                },
                "data": {
                    "examples": [
                        {
                            "id": 27,
                            "name": "8v8 | All Welcome",
                            "founderId": 822,
                            "private": false,
                            "democracy": true,
                            "playerIds": [
                                567,
                                232,
                                88,
                                119
                            ],
                            "spectatorIds": [
                                88
                            ],
                            "engine": "105.1.1-1821-gaca6f20 BAR105",
                            "game": "Beyond All Reason test-23561-0abff7c",
                            "map": "Red Comet Remake 1.8",
                            "startAreas": {
                                "0": {
                                    "x": 0,
                                    "y": 0,
                                    "width": 1,
                                    "height": 0.3
                                },
                                "1": {
                                    "x": 0,
                                    "y": 0.7,
                                    "width": 1,
                                    "height": 0.3
                                }
                            },
                            "minTeamsize": 3,
                            "maxTeamsize": 3,
                            "minRating": null,
                            "maxRating": 25
                        }
                    ],
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "name": {
                            "type": "string"
                        },
                        "founderId": {
                            "type": "integer"
                        },
                        "democracy": {
                            "default": true,
                            "type": "boolean"
                        },
                        "private": {
                            "default": false,
                            "type": "boolean"
                        },
                        "playerIds": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            }
                        },
                        "spectatorIds": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            }
                        },
                        "engine": {
                            "type": "string"
                        },
                        "game": {
                            "type": "string"
                        },
                        "map": {
                            "type": "string"
                        },
                        "startAreas": {
                            "default": {
                                "0": {
                                    "x": 0,
                                    "y": 0,
                                    "width": 1,
                                    "height": 0.3
                                },
                                "1": {
                                    "x": 0,
                                    "y": 0.7,
                                    "width": 1,
                                    "height": 0.3
                                }
                            },
                            "type": "object",
                            "patternProperties": {
                                "^(0|[1-9][0-9]*)$": {
                                    "examples": [
                                        {
                                            "x": 0,
                                            "y": 0,
                                            "width": 1,
                                            "height": 0.3
                                        }
                                    ],
                                    "type": "object",
                                    "properties": {
                                        "x": {
                                            "type": "number"
                                        },
                                        "y": {
                                            "type": "number"
                                        },
                                        "width": {
                                            "type": "number"
                                        },
                                        "height": {
                                            "type": "number"
                                        }
                                    },
                                    "required": [
                                        "x",
                                        "y",
                                        "width",
                                        "height"
                                    ]
                                }
                            }
                        },
                        "minTeamsize": {
                            "anyOf": [
                                {
                                    "type": "integer"
                                },
                                {
                                    "type": "null"
                                }
                            ]
                        },
                        "maxTeamsize": {
                            "anyOf": [
                                {
                                    "type": "integer"
                                },
                                {
                                    "type": "null"
                                }
                            ]
                        },
                        "minRating": {
                            "anyOf": [
                                {
                                    "type": "integer"
                                },
                                {
                                    "type": "null"
                                }
                            ]
                        },
                        "maxRating": {
                            "anyOf": [
                                {
                                    "type": "integer"
                                },
                                {
                                    "type": "null"
                                }
                            ]
                        }
                    },
                    "required": [
                        "id",
                        "name",
                        "founderId",
                        "democracy",
                        "private",
                        "playerIds",
                        "spectatorIds",
                        "engine",
                        "game",
                        "map",
                        "startAreas",
                        "minTeamsize",
                        "maxTeamsize",
                        "minRating",
                        "maxRating"
                    ]
                }
            },
            "required": [
                "command",
                "status",
                "data"
            ]
        },
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/joined/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "const": "internal_error",
                    "type": "string"
                }
            },
            "required": [
                "command",
                "status",
                "reason"
            ]
        }
    ]
}
```

</details>

#### TypeScript Definition
```ts
export type LobbyJoinedResponse =
    | {
          command: "lobby/joined/response";
          status: "success";
          data: {
              id: number;
              name: string;
              founderId: number;
              democracy: boolean;
              private: boolean;
              playerIds: number[];
              spectatorIds: number[];
              engine: string;
              game: string;
              map: string;
              startAreas: {
                  [k: string]: {
                      x: number;
                      y: number;
                      width: number;
                      height: number;
                  };
              };
              minTeamsize: number | null;
              maxTeamsize: number | null;
              minRating: number | null;
              maxRating: number | null;
          };
      }
    | {
          command: "lobby/joined/response";
          status: "failed";
          reason: "internal_error";
      };

```
#### Example
```json
{
    "command": "lobby/joined/response",
    "status": "success",
    "data": {
        "id": 27,
        "name": "8v8 | All Welcome",
        "founderId": 822,
        "private": false,
        "democracy": true,
        "playerIds": [
            567,
            232,
            88,
            119
        ],
        "spectatorIds": [
            88
        ],
        "engine": "105.1.1-1821-gaca6f20 BAR105",
        "game": "Beyond All Reason test-23561-0abff7c",
        "map": "Red Comet Remake 1.8",
        "startAreas": {
            "0": {
                "x": 0,
                "y": 0,
                "width": 1,
                "height": 0.3
            },
            "1": {
                "x": 0,
                "y": 0.7,
                "width": 1,
                "height": 0.3
            }
        },
        "minTeamsize": 3,
        "maxTeamsize": 3,
        "minRating": null,
        "maxRating": 25
    }
}
```
---

## leave

Leave the current lobby.

### request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "lobby/leave/request",
    "type": "object",
    "properties": {
        "command": {
            "const": "lobby/leave/request",
            "type": "string"
        }
    },
    "required": [
        "command"
    ]
}
```

</details>

#### TypeScript Definition
```ts
export interface LobbyLeaveRequest {
    command: "lobby/leave/request";
}

```
#### Example
```json
{
    "command": "lobby/leave/request"
}
```
### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "lobby/leave/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/leave/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                }
            },
            "required": [
                "command",
                "status"
            ]
        },
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/leave/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "anyOf": [
                        {
                            "const": "no_lobby",
                            "type": "string"
                        },
                        {
                            "const": "internal_error",
                            "type": "string"
                        }
                    ]
                }
            },
            "required": [
                "command",
                "status",
                "reason"
            ]
        }
    ]
}
```

</details>

#### TypeScript Definition
```ts
export type LobbyLeaveResponse =
    | {
          command: "lobby/leave/response";
          status: "success";
      }
    | {
          command: "lobby/leave/response";
          status: "failed";
          reason: "no_lobby" | "internal_error";
      };

```
#### Example
```json
{
    "command": "lobby/leave/response",
    "status": "success"
}
```
---

## left

Sent when the server removes the client from a lobby.

### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "lobby/left/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/left/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                }
            },
            "required": [
                "command",
                "status"
            ]
        },
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/left/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "const": "internal_error",
                    "type": "string"
                }
            },
            "required": [
                "command",
                "status",
                "reason"
            ]
        }
    ]
}
```

</details>

#### TypeScript Definition
```ts
export type LobbyLeftResponse =
    | {
          command: "lobby/left/response";
          status: "success";
      }
    | {
          command: "lobby/left/response";
          status: "failed";
          reason: "internal_error";
      };

```
#### Example
```json
{
    "command": "lobby/left/response",
    "status": "success"
}
```
---

## list

Returns all custom lobbies.

### request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "lobby/list/request",
    "type": "object",
    "properties": {
        "command": {
            "const": "lobby/list/request",
            "type": "string"
        }
    },
    "required": [
        "command"
    ]
}
```

</details>

#### TypeScript Definition
```ts
export interface LobbyListRequest {
    command: "lobby/list/request";
}

```
#### Example
```json
{
    "command": "lobby/list/request"
}
```
### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "lobby/list/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/list/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "lobbies": {
                            "type": "array",
                            "items": {
                                "examples": [
                                    {
                                        "id": 27,
                                        "name": "8v8 | All Welcome",
                                        "founderId": 822,
                                        "private": false,
                                        "democracy": true,
                                        "playerIds": [
                                            567,
                                            232,
                                            88,
                                            119
                                        ],
                                        "spectatorIds": [
                                            88
                                        ],
                                        "engine": "105.1.1-1821-gaca6f20 BAR105",
                                        "game": "Beyond All Reason test-23561-0abff7c",
                                        "map": "Red Comet Remake 1.8",
                                        "startAreas": {
                                            "0": {
                                                "x": 0,
                                                "y": 0,
                                                "width": 1,
                                                "height": 0.3
                                            },
                                            "1": {
                                                "x": 0,
                                                "y": 0.7,
                                                "width": 1,
                                                "height": 0.3
                                            }
                                        },
                                        "minTeamsize": 3,
                                        "maxTeamsize": 3,
                                        "minRating": null,
                                        "maxRating": 25
                                    }
                                ],
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "type": "integer"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "founderId": {
                                        "type": "integer"
                                    },
                                    "democracy": {
                                        "default": true,
                                        "type": "boolean"
                                    },
                                    "private": {
                                        "default": false,
                                        "type": "boolean"
                                    },
                                    "playerIds": {
                                        "type": "array",
                                        "items": {
                                            "type": "integer"
                                        }
                                    },
                                    "spectatorIds": {
                                        "type": "array",
                                        "items": {
                                            "type": "integer"
                                        }
                                    },
                                    "engine": {
                                        "type": "string"
                                    },
                                    "game": {
                                        "type": "string"
                                    },
                                    "map": {
                                        "type": "string"
                                    },
                                    "startAreas": {
                                        "default": {
                                            "0": {
                                                "x": 0,
                                                "y": 0,
                                                "width": 1,
                                                "height": 0.3
                                            },
                                            "1": {
                                                "x": 0,
                                                "y": 0.7,
                                                "width": 1,
                                                "height": 0.3
                                            }
                                        },
                                        "type": "object",
                                        "patternProperties": {
                                            "^(0|[1-9][0-9]*)$": {
                                                "examples": [
                                                    {
                                                        "x": 0,
                                                        "y": 0,
                                                        "width": 1,
                                                        "height": 0.3
                                                    }
                                                ],
                                                "type": "object",
                                                "properties": {
                                                    "x": {
                                                        "type": "number"
                                                    },
                                                    "y": {
                                                        "type": "number"
                                                    },
                                                    "width": {
                                                        "type": "number"
                                                    },
                                                    "height": {
                                                        "type": "number"
                                                    }
                                                },
                                                "required": [
                                                    "x",
                                                    "y",
                                                    "width",
                                                    "height"
                                                ]
                                            }
                                        }
                                    },
                                    "minTeamsize": {
                                        "anyOf": [
                                            {
                                                "type": "integer"
                                            },
                                            {
                                                "type": "null"
                                            }
                                        ]
                                    },
                                    "maxTeamsize": {
                                        "anyOf": [
                                            {
                                                "type": "integer"
                                            },
                                            {
                                                "type": "null"
                                            }
                                        ]
                                    },
                                    "minRating": {
                                        "anyOf": [
                                            {
                                                "type": "integer"
                                            },
                                            {
                                                "type": "null"
                                            }
                                        ]
                                    },
                                    "maxRating": {
                                        "anyOf": [
                                            {
                                                "type": "integer"
                                            },
                                            {
                                                "type": "null"
                                            }
                                        ]
                                    }
                                },
                                "required": [
                                    "id",
                                    "name",
                                    "founderId",
                                    "democracy",
                                    "private",
                                    "playerIds",
                                    "spectatorIds",
                                    "engine",
                                    "game",
                                    "map",
                                    "startAreas",
                                    "minTeamsize",
                                    "maxTeamsize",
                                    "minRating",
                                    "maxRating"
                                ]
                            }
                        }
                    },
                    "required": [
                        "lobbies"
                    ]
                }
            },
            "required": [
                "command",
                "status",
                "data"
            ]
        },
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/list/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "const": "internal_error",
                    "type": "string"
                }
            },
            "required": [
                "command",
                "status",
                "reason"
            ]
        }
    ]
}
```

</details>

#### TypeScript Definition
```ts
export type LobbyListResponse =
    | {
          command: "lobby/list/response";
          status: "success";
          data: {
              lobbies: {
                  id: number;
                  name: string;
                  founderId: number;
                  democracy: boolean;
                  private: boolean;
                  playerIds: number[];
                  spectatorIds: number[];
                  engine: string;
                  game: string;
                  map: string;
                  startAreas: {
                      [k: string]: {
                          x: number;
                          y: number;
                          width: number;
                          height: number;
                      };
                  };
                  minTeamsize: number | null;
                  maxTeamsize: number | null;
                  minRating: number | null;
                  maxRating: number | null;
              }[];
          };
      }
    | {
          command: "lobby/list/response";
          status: "failed";
          reason: "internal_error";
      };

```
#### Example
```json
{
    "command": "lobby/list/response",
    "status": "success",
    "data": {
        "lobbies": [
            {
                "id": 27,
                "name": "8v8 | All Welcome",
                "founderId": 822,
                "private": false,
                "democracy": true,
                "playerIds": [
                    567,
                    232,
                    88,
                    119
                ],
                "spectatorIds": [
                    88
                ],
                "engine": "105.1.1-1821-gaca6f20 BAR105",
                "game": "Beyond All Reason test-23561-0abff7c",
                "map": "Red Comet Remake 1.8",
                "startAreas": {
                    "0": {
                        "x": 0,
                        "y": 0,
                        "width": 1,
                        "height": 0.3
                    },
                    "1": {
                        "x": 0,
                        "y": 0.7,
                        "width": 1,
                        "height": 0.3
                    }
                },
                "minTeamsize": 3,
                "maxTeamsize": 3,
                "minRating": null,
                "maxRating": 25
            }
        ]
    }
}
```
---

## receiveMessage

Receive a lobby message. See (sendMessage)[#sendMessage] for outgoing messages.

### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "lobby/receiveMessage/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/receiveMessage/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                },
                "data": {
                    "examples": [
                        {
                            "userId": 27,
                            "message": "Hello lobby!"
                        }
                    ],
                    "type": "object",
                    "properties": {
                        "userId": {
                            "type": "integer"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "userId",
                        "message"
                    ]
                }
            },
            "required": [
                "command",
                "status",
                "data"
            ]
        },
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/receiveMessage/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "const": "internal_error",
                    "type": "string"
                }
            },
            "required": [
                "command",
                "status",
                "reason"
            ]
        }
    ]
}
```

</details>

#### TypeScript Definition
```ts
export type LobbyReceiveMessageResponse =
    | {
          command: "lobby/receiveMessage/response";
          status: "success";
          data: {
              userId: number;
              message: string;
          };
      }
    | {
          command: "lobby/receiveMessage/response";
          status: "failed";
          reason: "internal_error";
      };

```
#### Example
```json
{
    "command": "lobby/receiveMessage/response",
    "status": "success",
    "data": {
        "userId": 27,
        "message": "Hello lobby!"
    }
}
```
---

## sendMessage

Send a lobby message. See (receiveMessage)[#receiveMessage] for incoming messages.

### request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "lobby/sendMessage/request",
    "type": "object",
    "properties": {
        "command": {
            "const": "lobby/sendMessage/request",
            "type": "string"
        },
        "data": {
            "examples": [
                {
                    "message": "Hello lobby!"
                }
            ],
            "type": "object",
            "properties": {
                "message": {
                    "maxLength": 300,
                    "type": "string"
                }
            },
            "required": [
                "message"
            ]
        }
    },
    "required": [
        "command",
        "data"
    ]
}
```

</details>

#### TypeScript Definition
```ts
export interface LobbySendMessageRequest {
    command: "lobby/sendMessage/request";
    data: {
        message: string;
    };
}

```
#### Example
```json
{
    "command": "lobby/sendMessage/request",
    "data": {
        "message": "Hello lobby!"
    }
}
```
### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "lobby/sendMessage/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/sendMessage/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                }
            },
            "required": [
                "command",
                "status"
            ]
        },
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/sendMessage/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "anyOf": [
                        {
                            "const": "not_in_lobby",
                            "type": "string"
                        },
                        {
                            "const": "muted",
                            "type": "string"
                        },
                        {
                            "const": "internal_error",
                            "type": "string"
                        }
                    ]
                }
            },
            "required": [
                "command",
                "status",
                "reason"
            ]
        }
    ]
}
```

</details>

#### TypeScript Definition
```ts
export type LobbySendMessageResponse =
    | {
          command: "lobby/sendMessage/response";
          status: "success";
      }
    | {
          command: "lobby/sendMessage/response";
          status: "failed";
          reason: "not_in_lobby" | "muted" | "internal_error";
      };

```
#### Example
```json
{
    "command": "lobby/sendMessage/response",
    "status": "success"
}
```
---

## updated

Server sends this partial object whenever a lobby relevant to the client changes in some way.

### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "lobby/updated/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/updated/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                },
                "data": {
                    "examples": [
                        {
                            "name": "3v3 | Newbies only",
                            "minTeamsize": 3,
                            "maxTeamsize": 3,
                            "minRating": null,
                            "maxRating": 25
                        }
                    ],
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "name": {
                            "type": "string"
                        },
                        "founderId": {
                            "type": "integer"
                        },
                        "democracy": {
                            "default": true,
                            "type": "boolean"
                        },
                        "private": {
                            "default": false,
                            "type": "boolean"
                        },
                        "playerIds": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            }
                        },
                        "spectatorIds": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            }
                        },
                        "engine": {
                            "type": "string"
                        },
                        "game": {
                            "type": "string"
                        },
                        "map": {
                            "type": "string"
                        },
                        "startAreas": {
                            "default": {
                                "0": {
                                    "x": 0,
                                    "y": 0,
                                    "width": 1,
                                    "height": 0.3
                                },
                                "1": {
                                    "x": 0,
                                    "y": 0.7,
                                    "width": 1,
                                    "height": 0.3
                                }
                            },
                            "type": "object",
                            "patternProperties": {
                                "^(0|[1-9][0-9]*)$": {
                                    "examples": [
                                        {
                                            "x": 0,
                                            "y": 0,
                                            "width": 1,
                                            "height": 0.3
                                        }
                                    ],
                                    "type": "object",
                                    "properties": {
                                        "x": {
                                            "type": "number"
                                        },
                                        "y": {
                                            "type": "number"
                                        },
                                        "width": {
                                            "type": "number"
                                        },
                                        "height": {
                                            "type": "number"
                                        }
                                    },
                                    "required": [
                                        "x",
                                        "y",
                                        "width",
                                        "height"
                                    ]
                                }
                            }
                        },
                        "minTeamsize": {
                            "anyOf": [
                                {
                                    "type": "integer"
                                },
                                {
                                    "type": "null"
                                }
                            ]
                        },
                        "maxTeamsize": {
                            "anyOf": [
                                {
                                    "type": "integer"
                                },
                                {
                                    "type": "null"
                                }
                            ]
                        },
                        "minRating": {
                            "anyOf": [
                                {
                                    "type": "integer"
                                },
                                {
                                    "type": "null"
                                }
                            ]
                        },
                        "maxRating": {
                            "anyOf": [
                                {
                                    "type": "integer"
                                },
                                {
                                    "type": "null"
                                }
                            ]
                        }
                    }
                }
            },
            "required": [
                "command",
                "status",
                "data"
            ]
        },
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "lobby/updated/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "const": "internal_error",
                    "type": "string"
                }
            },
            "required": [
                "command",
                "status",
                "reason"
            ]
        }
    ]
}
```

</details>

#### TypeScript Definition
```ts
export type LobbyUpdatedResponse =
    | {
          command: "lobby/updated/response";
          status: "success";
          data: {
              id?: number;
              name?: string;
              founderId?: number;
              democracy?: boolean;
              private?: boolean;
              playerIds?: number[];
              spectatorIds?: number[];
              engine?: string;
              game?: string;
              map?: string;
              startAreas?: {
                  [k: string]: {
                      x: number;
                      y: number;
                      width: number;
                      height: number;
                  };
              };
              minTeamsize?: number | null;
              maxTeamsize?: number | null;
              minRating?: number | null;
              maxRating?: number | null;
          };
      }
    | {
          command: "lobby/updated/response";
          status: "failed";
          reason: "internal_error";
      };

```
#### Example
```json
{
    "command": "lobby/updated/response",
    "status": "success",
    "data": {
        "name": "3v3 | Newbies only",
        "minTeamsize": 3,
        "maxTeamsize": 3,
        "minRating": null,
        "maxRating": 25
    }
}
```
