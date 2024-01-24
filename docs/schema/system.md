<!-- THIS FILE IS AUTOMATICALLY GENERATED, PLEASE DO NOT EDIT IT MANUALLY -->

# System

- [connected](#connected)
- [disconnect](#disconnect)
- [serverStats](#serverstats)
---

## Connected

Sent immediately by the server on connection.

- Endpoint Type: **Response** only
### Response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "system/connected/response",
    "roles": [],
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "messageId": {
                    "type": "string"
                },
                "commandId": {
                    "const": "system/connected/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "userId": {
                            "type": "integer"
                        },
                        "displayName": {
                            "type": "string"
                        },
                        "avatarUrl": {
                            "format": "uri",
                            "type": "string"
                        },
                        "clanId": {
                            "anyOf": [
                                {
                                    "type": "integer"
                                },
                                {
                                    "type": "null"
                                }
                            ]
                        },
                        "partyId": {
                            "anyOf": [
                                {
                                    "type": "integer"
                                },
                                {
                                    "type": "null"
                                }
                            ]
                        },
                        "roles": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "countryCode": {
                            "type": "string"
                        },
                        "battleStatus": {
                            "anyOf": [
                                {
                                    "allOf": [
                                        {
                                            "type": "object",
                                            "properties": {
                                                "battleId": {
                                                    "type": "integer"
                                                }
                                            },
                                            "required": [
                                                "battleId"
                                            ]
                                        },
                                        {
                                            "anyOf": [
                                                {
                                                    "type": "object",
                                                    "allOf": [
                                                        {
                                                            "type": "object",
                                                            "properties": {
                                                                "playerId": {
                                                                    "type": "integer"
                                                                },
                                                                "teamId": {
                                                                    "type": "integer"
                                                                },
                                                                "color": {
                                                                    "type": "string"
                                                                },
                                                                "bonus": {
                                                                    "type": "number"
                                                                },
                                                                "inGame": {
                                                                    "type": "boolean"
                                                                }
                                                            },
                                                            "required": [
                                                                "playerId",
                                                                "teamId",
                                                                "color",
                                                                "bonus",
                                                                "inGame"
                                                            ]
                                                        },
                                                        {
                                                            "type": "object",
                                                            "properties": {
                                                                "isSpectator": {
                                                                    "const": false,
                                                                    "type": "boolean"
                                                                },
                                                                "isBot": {
                                                                    "const": false,
                                                                    "type": "boolean"
                                                                },
                                                                "ready": {
                                                                    "type": "boolean"
                                                                },
                                                                "sync": {
                                                                    "type": "object",
                                                                    "properties": {
                                                                        "engine": {
                                                                            "type": "number"
                                                                        },
                                                                        "game": {
                                                                            "type": "number"
                                                                        },
                                                                        "map": {
                                                                            "type": "number"
                                                                        }
                                                                    },
                                                                    "required": [
                                                                        "engine",
                                                                        "game",
                                                                        "map"
                                                                    ]
                                                                }
                                                            },
                                                            "required": [
                                                                "isSpectator",
                                                                "isBot",
                                                                "ready",
                                                                "sync"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "object",
                                                    "properties": {
                                                        "isSpectator": {
                                                            "const": true,
                                                            "type": "boolean"
                                                        },
                                                        "isBot": {
                                                            "const": false,
                                                            "type": "boolean"
                                                        }
                                                    },
                                                    "required": [
                                                        "isSpectator",
                                                        "isBot"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "null"
                                }
                            ]
                        },
                        "friendIds": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            }
                        },
                        "outgoingFriendRequestIds": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            }
                        },
                        "incomingFriendRequestIds": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            }
                        },
                        "ignoreIds": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            }
                        }
                    },
                    "required": [
                        "userId",
                        "displayName",
                        "avatarUrl",
                        "clanId",
                        "partyId",
                        "roles",
                        "battleStatus",
                        "friendIds",
                        "outgoingFriendRequestIds",
                        "incomingFriendRequestIds",
                        "ignoreIds"
                    ]
                }
            },
            "required": [
                "messageId",
                "commandId",
                "status",
                "data"
            ]
        },
        {
            "type": "object",
            "properties": {
                "messageId": {
                    "type": "string"
                },
                "commandId": {
                    "const": "system/connected/response",
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
                "messageId",
                "commandId",
                "status",
                "reason"
            ]
        },
        {
            "type": "object",
            "properties": {
                "messageId": {
                    "type": "string"
                },
                "commandId": {
                    "const": "system/connected/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "const": "unauthorized",
                    "type": "string"
                }
            },
            "required": [
                "messageId",
                "commandId",
                "status",
                "reason"
            ]
        },
        {
            "type": "object",
            "properties": {
                "messageId": {
                    "type": "string"
                },
                "commandId": {
                    "const": "system/connected/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "const": "invalid_command",
                    "type": "string"
                }
            },
            "required": [
                "messageId",
                "commandId",
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
export type SystemConnectedResponse =
    | {
          messageId: string;
          commandId: "system/connected/response";
          status: "success";
          data: {
              userId: number;
              displayName: string;
              avatarUrl: string;
              clanId: number | null;
              partyId: number | null;
              roles: string[];
              countryCode?: string;
              battleStatus:
                  | ({
                        battleId: number;
                    } & (
                        | ({
                              playerId: number;
                              teamId: number;
                              color: string;
                              bonus: number;
                              inGame: boolean;
                          } & {
                              isSpectator: false;
                              isBot: false;
                              ready: boolean;
                              sync: {
                                  engine: number;
                                  game: number;
                                  map: number;
                              };
                          })
                        | {
                              isSpectator: true;
                              isBot: false;
                          }
                    ))
                  | null;
              friendIds: number[];
              outgoingFriendRequestIds: number[];
              incomingFriendRequestIds: number[];
              ignoreIds: number[];
          };
      }
    | {
          messageId: string;
          commandId: "system/connected/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "system/connected/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "system/connected/response";
          status: "failed";
          reason: "invalid_command";
      };

```
#### Example
```json
{
    "messageId": "mollit",
    "commandId": "system/connected/response",
    "status": "success",
    "data": {
        "userId": -75320000,
        "displayName": "mollit",
        "avatarUrl": "http://ggggg.ddgigi",
        "clanId": -75320000,
        "partyId": -75320000,
        "roles": [
            "mollit"
        ],
        "countryCode": "mollit",
        "battleStatus": {
            "battleId": -75320000,
            "playerId": -75320000,
            "teamId": -75320000,
            "color": "mollit",
            "bonus": -75320000,
            "inGame": false,
            "isSpectator": false,
            "isBot": false,
            "ready": false,
            "sync": {
                "engine": -75320000,
                "game": -75320000,
                "map": -75320000
            }
        },
        "friendIds": [
            -75320000
        ],
        "outgoingFriendRequestIds": [
            -75320000
        ],
        "incomingFriendRequestIds": [
            -75320000
        ],
        "ignoreIds": [
            -75320000
        ]
    }
}
```
---

## Disconnect

Ask the server to terminate the connection.

- Endpoint Type: **Request** -> **Response**
### Request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "system/disconnect/request",
    "roles": [],
    "type": "object",
    "properties": {
        "messageId": {
            "type": "string"
        },
        "commandId": {
            "const": "system/disconnect/request",
            "type": "string"
        },
        "data": {
            "type": "object",
            "properties": {
                "reason": {
                    "type": "string"
                }
            },
            "required": [
                "reason"
            ]
        }
    },
    "required": [
        "messageId",
        "commandId"
    ]
}
```

</details>

#### TypeScript Definition
```ts
export interface SystemDisconnectRequest {
    messageId: string;
    commandId: "system/disconnect/request";
    data?: {
        reason: string;
    };
}

```
#### Example
```json
{
    "messageId": "mollit",
    "commandId": "system/disconnect/request"
}
```
### Response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "system/disconnect/response",
    "roles": [],
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "messageId": {
                    "type": "string"
                },
                "commandId": {
                    "const": "system/disconnect/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                }
            },
            "required": [
                "messageId",
                "commandId",
                "status"
            ]
        },
        {
            "type": "object",
            "properties": {
                "messageId": {
                    "type": "string"
                },
                "commandId": {
                    "const": "system/disconnect/response",
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
                "messageId",
                "commandId",
                "status",
                "reason"
            ]
        },
        {
            "type": "object",
            "properties": {
                "messageId": {
                    "type": "string"
                },
                "commandId": {
                    "const": "system/disconnect/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "const": "unauthorized",
                    "type": "string"
                }
            },
            "required": [
                "messageId",
                "commandId",
                "status",
                "reason"
            ]
        },
        {
            "type": "object",
            "properties": {
                "messageId": {
                    "type": "string"
                },
                "commandId": {
                    "const": "system/disconnect/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "const": "invalid_command",
                    "type": "string"
                }
            },
            "required": [
                "messageId",
                "commandId",
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
export type SystemDisconnectResponse =
    | {
          messageId: string;
          commandId: "system/disconnect/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "system/disconnect/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "system/disconnect/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "system/disconnect/response";
          status: "failed";
          reason: "invalid_command";
      };

```
#### Example
```json
{
    "messageId": "mollit",
    "commandId": "system/disconnect/response",
    "status": "success"
}
```
---

## ServerStats

Get server stats such as user count.

- Endpoint Type: **Request** -> **Response**
### Request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "system/serverStats/request",
    "roles": [],
    "type": "object",
    "properties": {
        "messageId": {
            "type": "string"
        },
        "commandId": {
            "const": "system/serverStats/request",
            "type": "string"
        }
    },
    "required": [
        "messageId",
        "commandId"
    ]
}
```

</details>

#### TypeScript Definition
```ts
export interface SystemServerStatsRequest {
    messageId: string;
    commandId: "system/serverStats/request";
}

```
#### Example
```json
{
    "messageId": "mollit",
    "commandId": "system/serverStats/request"
}
```
### Response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "system/serverStats/response",
    "roles": [],
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "messageId": {
                    "type": "string"
                },
                "commandId": {
                    "const": "system/serverStats/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "userCount": {
                            "type": "integer"
                        }
                    },
                    "required": [
                        "userCount"
                    ]
                }
            },
            "required": [
                "messageId",
                "commandId",
                "status",
                "data"
            ]
        },
        {
            "type": "object",
            "properties": {
                "messageId": {
                    "type": "string"
                },
                "commandId": {
                    "const": "system/serverStats/response",
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
                "messageId",
                "commandId",
                "status",
                "reason"
            ]
        },
        {
            "type": "object",
            "properties": {
                "messageId": {
                    "type": "string"
                },
                "commandId": {
                    "const": "system/serverStats/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "const": "unauthorized",
                    "type": "string"
                }
            },
            "required": [
                "messageId",
                "commandId",
                "status",
                "reason"
            ]
        },
        {
            "type": "object",
            "properties": {
                "messageId": {
                    "type": "string"
                },
                "commandId": {
                    "const": "system/serverStats/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "const": "invalid_command",
                    "type": "string"
                }
            },
            "required": [
                "messageId",
                "commandId",
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
export type SystemServerStatsResponse =
    | {
          messageId: string;
          commandId: "system/serverStats/response";
          status: "success";
          data: {
              userCount: number;
          };
      }
    | {
          messageId: string;
          commandId: "system/serverStats/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "system/serverStats/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "system/serverStats/response";
          status: "failed";
          reason: "invalid_command";
      };

```
#### Example
```json
{
    "messageId": "mollit",
    "commandId": "system/serverStats/response",
    "status": "success",
    "data": {
        "userCount": -75320000
    }
}
```