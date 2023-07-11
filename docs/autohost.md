# Autohost

These commands should only be usable by client users with `bot: true`, otherwise the server should return a failed response with the reason `botflag_required`.

---
- [slave](#slave)
- [unslave](#unslave)
---

## slave

Registers the client as slavable by the master server to be used for hosting dedicated lobbies or matchmaking.

### request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "autohost/slave/request",
    "type": "object",
    "properties": {
        "command": {
            "const": "autohost/slave/request",
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
export interface AutohostSlaveRequest {
    command: "autohost/slave/request";
}

```
#### Example
```json
{
    "command": "autohost/slave/request"
}
```
### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "autohost/slave/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "autohost/slave/response",
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
                    "const": "autohost/slave/response",
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
export type AutohostSlaveResponse =
    | {
          command: "autohost/slave/response";
          status: "success";
      }
    | {
          command: "autohost/slave/response";
          status: "failed";
          reason: "botflag_required" | "internal_error";
      };

```
#### Example
```json
{
    "command": "autohost/slave/response",
    "status": "success"
}
```
---

## unslave

Unregisters the client as slavable.

### request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "autohost/unslave/request",
    "type": "object",
    "properties": {
        "command": {
            "const": "autohost/unslave/request",
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
export interface AutohostUnslaveRequest {
    command: "autohost/unslave/request";
}

```
#### Example
```json
{
    "command": "autohost/unslave/request"
}
```
### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "autohost/unslave/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "autohost/unslave/response",
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
                    "const": "autohost/unslave/response",
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
export type AutohostUnslaveResponse =
    | {
          command: "autohost/unslave/response";
          status: "success";
      }
    | {
          command: "autohost/unslave/response";
          status: "failed";
          reason: "botflag_required" | "already_unslaved" | "internal_error";
      };

```
#### Example
```json
{
    "command": "autohost/unslave/response",
    "status": "success"
}
```
