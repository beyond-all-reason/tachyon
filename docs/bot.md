# Bot

These commands should only be usable by client users with the `bot` role.

---
- [slave](#slave)
- [unslave](#unslave)
---

## Slave

Registers the client as slavable by the master server to be used for hosting dedicated lobbies or matchmaking.

- Endpoint Type: **Request** -> **Response**
- Requires Login: **false**
- Requires Role: `bot`

### Request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "bot/slave/request",
    "requiresLogin": false,
    "requiresRole": true,
    "type": "object",
    "properties": {
        "command": {
            "const": "bot/slave/request",
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
export interface BotSlaveRequest {
    command: "bot/slave/request";
}

```
#### Example
```json
{
    "command": "bot/slave/request"
}
```
### Response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "bot/slave/response",
    "requiresLogin": false,
    "requiresRole": true,
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "bot/slave/response",
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
                    "const": "bot/slave/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "anyOf": [
                        {
                            "const": "botflag_required",
                            "type": "string"
                        },
                        {
                            "const": "internal_error",
                            "type": "string"
                        },
                        {
                            "const": "unauthorized",
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
export type BotSlaveResponse =
    | {
          command: "bot/slave/response";
          status: "success";
      }
    | {
          command: "bot/slave/response";
          status: "failed";
          reason: "botflag_required" | "internal_error" | "unauthorized";
      };

```
#### Example
```json
{
    "command": "bot/slave/response",
    "status": "success"
}
```
---

## Unslave

Unregisters the client as slavable.

- Endpoint Type: **Request** -> **Response**
- Requires Login: **false**
- Requires Role: `bot`

### Request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "bot/unslave/request",
    "requiresLogin": false,
    "requiresRole": true,
    "type": "object",
    "properties": {
        "command": {
            "const": "bot/unslave/request",
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
export interface BotUnslaveRequest {
    command: "bot/unslave/request";
}

```
#### Example
```json
{
    "command": "bot/unslave/request"
}
```
### Response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "bot/unslave/response",
    "requiresLogin": false,
    "requiresRole": true,
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "bot/unslave/response",
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
                    "const": "bot/unslave/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "anyOf": [
                        {
                            "const": "botflag_required",
                            "type": "string"
                        },
                        {
                            "const": "already_unslaved",
                            "type": "string"
                        },
                        {
                            "const": "internal_error",
                            "type": "string"
                        },
                        {
                            "const": "unauthorized",
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
export type BotUnslaveResponse =
    | {
          command: "bot/unslave/response";
          status: "success";
      }
    | {
          command: "bot/unslave/response";
          status: "failed";
          reason: "botflag_required" | "already_unslaved" | "internal_error" | "unauthorized";
      };

```
#### Example
```json
{
    "command": "bot/unslave/response",
    "status": "success"
}
```
