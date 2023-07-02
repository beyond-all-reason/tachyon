# init

- [init](#init)
---

## init

### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "init/init/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "init/init/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "tachyonVersion": {
                            "examples": [
                                "1.2.3"
                            ],
                            "type": "string"
                        }
                    },
                    "required": [
                        "tachyonVersion"
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
                    "const": "init/init/response",
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
export type InitInitResponse =
    | {
          command: "init/init/response";
          status: "success";
          data: {
              tachyonVersion: string;
          };
      }
    | {
          command: "init/init/response";
          status: "failed";
          reason: "internal_error";
      };

```
#### Example
```json
{
    "command": "init/init/response",
    "status": "success",
    "data": {
        "tachyonVersion": "1.2.3"
    }
}
```
