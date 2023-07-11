# Matchmaking

The matchmaking cycle works as follows:

1. Clients should first retrieve a list of all the available queues from the server using [list](#list).
2. Clients should then queue for one or more of these queues by sending an array of the queue ids in a [queue](#queue) request.
3. The server should send periodic updates about the total number of clients in at least one of the same queues as the queued client as a [queueUpdate](#queueupdate) response.
4. When a match is found, the server should send a [found](#found) response along with the id of the queue of the found match.
5. Clients can then ready up by sending a [ready](#ready) request. The number of readied players should be sent to clients via the [readyUpdate](#readyupdate) response.
6. To cancel queueing, or to decline a found match, clients should send a [cancel](#cancel) request.
7. If a client fails to ready up for a found match, the server should send a [lost](#lost) response, and the queueing phase should resume.

---
- [cancel](#cancel)
- [found](#found)
- [list](#list)
- [lost](#lost)
- [queue](#queue)
- [queueUpdate](#queueupdate)
- [ready](#ready)
- [readyUpdate](#readyupdate)
---

## cancel

Cancel queueing for matchmaking. Can also be sent during the ready phase to effectively decline the match.

### request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "matchmaking/cancel/request",
    "type": "object",
    "properties": {
        "command": {
            "const": "matchmaking/cancel/request",
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
export interface MatchmakingCancelRequest {
    command: "matchmaking/cancel/request";
}

```
#### Example
```json
{
    "command": "matchmaking/cancel/request"
}
```
### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "matchmaking/cancel/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "matchmaking/cancel/response",
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
                    "const": "matchmaking/cancel/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "anyOf": [
                        {
                            "const": "not_queued",
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
export type MatchmakingCancelResponse =
    | {
          command: "matchmaking/cancel/response";
          status: "success";
      }
    | {
          command: "matchmaking/cancel/response";
          status: "failed";
          reason: "not_queued" | "internal_error";
      };

```
#### Example
```json
{
    "command": "matchmaking/cancel/response",
    "status": "success"
}
```
---

## found

Server should send this when there are enough queued players to form a valid game that meets their criteria. Clients should respond with [ready](#ready).

### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "matchmaking/found/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "matchmaking/found/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "queueId": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "queueId"
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
                    "const": "matchmaking/found/response",
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
export type MatchmakingFoundResponse =
    | {
          command: "matchmaking/found/response";
          status: "success";
          data: {
              queueId: string;
          };
      }
    | {
          command: "matchmaking/found/response";
          status: "failed";
          reason: "internal_error";
      };

```
#### Example
```json
{
    "command": "matchmaking/found/response",
    "status": "success",
    "data": {
        "queueId": "mollit"
    }
}
```
---

## list

Returns all available matchmaking queues.

### request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "matchmaking/list/request",
    "type": "object",
    "properties": {
        "command": {
            "const": "matchmaking/list/request",
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
export interface MatchmakingListRequest {
    command: "matchmaking/list/request";
}

```
#### Example
```json
{
    "command": "matchmaking/list/request"
}
```
### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "matchmaking/list/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "matchmaking/list/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                },
                "data": {
                    "examples": [
                        {
                            "queues": [
                                {
                                    "id": "1v1",
                                    "name": "Duel",
                                    "ranked": true
                                },
                                {
                                    "id": "2v2",
                                    "name": "2v2",
                                    "ranked": true
                                }
                            ]
                        }
                    ],
                    "type": "object",
                    "properties": {
                        "queues": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "type": "string"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "ranked": {
                                        "type": "boolean"
                                    }
                                },
                                "required": [
                                    "id",
                                    "name",
                                    "ranked"
                                ]
                            }
                        }
                    },
                    "required": [
                        "queues"
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
                    "const": "matchmaking/list/response",
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
export type MatchmakingListResponse =
    | {
          command: "matchmaking/list/response";
          status: "success";
          data: {
              queues: {
                  id: string;
                  name: string;
                  ranked: boolean;
              }[];
          };
      }
    | {
          command: "matchmaking/list/response";
          status: "failed";
          reason: "internal_error";
      };

```
#### Example
```json
{
    "command": "matchmaking/list/response",
    "status": "success",
    "data": {
        "queues": [
            {
                "id": "1v1",
                "name": "Duel",
                "ranked": true
            },
            {
                "id": "2v2",
                "name": "2v2",
                "ranked": true
            }
        ]
    }
}
```
---

## lost

Sent when a found match gets disbanded because a client failed to ready up.

### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "matchmaking/lost/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "matchmaking/lost/response",
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
                    "const": "matchmaking/lost/response",
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
export type MatchmakingLostResponse =
    | {
          command: "matchmaking/lost/response";
          status: "success";
      }
    | {
          command: "matchmaking/lost/response";
          status: "failed";
          reason: "internal_error";
      };

```
#### Example
```json
{
    "command": "matchmaking/lost/response",
    "status": "success"
}
```
---

## queue

Queue up for matchmaking. Should cancel the previous queue if already in one.

### request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "matchmaking/queue/request",
    "type": "object",
    "properties": {
        "command": {
            "const": "matchmaking/queue/request",
            "type": "string"
        },
        "data": {
            "type": "object",
            "properties": {
                "queues": {
                    "minItems": 1,
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            },
            "required": [
                "queues"
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
export interface MatchmakingQueueRequest {
    command: "matchmaking/queue/request";
    data: {
        queues: [string, ...string[]];
    };
}

```
#### Example
```json
{
    "command": "matchmaking/queue/request",
    "data": {
        "queues": [
            "mollit"
        ]
    }
}
```
### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "matchmaking/queue/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "matchmaking/queue/response",
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
                    "const": "matchmaking/queue/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "anyOf": [
                        {
                            "const": "invalid_queue_specified",
                            "type": "string"
                        },
                        {
                            "const": "already_ingame",
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
export type MatchmakingQueueResponse =
    | {
          command: "matchmaking/queue/response";
          status: "success";
      }
    | {
          command: "matchmaking/queue/response";
          status: "failed";
          reason: "invalid_queue_specified" | "already_ingame" | "internal_error";
      };

```
#### Example
```json
{
    "command": "matchmaking/queue/response",
    "status": "success"
}
```
---

## queueUpdate

Contains some info about the state of the current queue.

### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "matchmaking/queueUpdate/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "matchmaking/queueUpdate/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "playersQueued": {
                            "type": "integer"
                        }
                    },
                    "required": [
                        "playersQueued"
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
                    "const": "matchmaking/queueUpdate/response",
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
export type MatchmakingQueueUpdateResponse =
    | {
          command: "matchmaking/queueUpdate/response";
          status: "success";
          data: {
              playersQueued: number;
          };
      }
    | {
          command: "matchmaking/queueUpdate/response";
          status: "failed";
          reason: "internal_error";
      };

```
#### Example
```json
{
    "command": "matchmaking/queueUpdate/response",
    "status": "success",
    "data": {
        "playersQueued": -75320000
    }
}
```
---

## ready

Clients should send this when they are ready to proceed with the found match. If not sent within 10s of the [found](#found) response then queue should be cancelled.

### request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "matchmaking/ready/request",
    "type": "object",
    "properties": {
        "command": {
            "const": "matchmaking/ready/request",
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
export interface MatchmakingReadyRequest {
    command: "matchmaking/ready/request";
}

```
#### Example
```json
{
    "command": "matchmaking/ready/request"
}
```
### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "matchmaking/ready/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "matchmaking/ready/response",
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
                    "const": "matchmaking/ready/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "anyOf": [
                        {
                            "const": "no_match",
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
export type MatchmakingReadyResponse =
    | {
          command: "matchmaking/ready/response";
          status: "success";
      }
    | {
          command: "matchmaking/ready/response";
          status: "failed";
          reason: "no_match" | "internal_error";
      };

```
#### Example
```json
{
    "command": "matchmaking/ready/response",
    "status": "success"
}
```
---

## readyUpdate

Sent when a client in a found match readies up.

### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "matchmaking/readyUpdate/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "matchmaking/readyUpdate/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "readyMax": {
                            "type": "integer"
                        },
                        "readyCurrent": {
                            "type": "integer"
                        }
                    },
                    "required": [
                        "readyMax",
                        "readyCurrent"
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
                    "const": "matchmaking/readyUpdate/response",
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
export type MatchmakingReadyUpdateResponse =
    | {
          command: "matchmaking/readyUpdate/response";
          status: "success";
          data: {
              readyMax: number;
              readyCurrent: number;
          };
      }
    | {
          command: "matchmaking/readyUpdate/response";
          status: "failed";
          reason: "internal_error";
      };

```
#### Example
```json
{
    "command": "matchmaking/readyUpdate/response",
    "status": "success",
    "data": {
        "readyMax": -75320000,
        "readyCurrent": -75320000
    }
}
```
