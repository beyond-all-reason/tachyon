# auth

- [register](#register)
- [getToken](#getToken)
- [login](#login)
---

## register

### request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "auth/register/request",
    "type": "object",
    "properties": {
        "command": {
            "const": "auth/register/request",
            "type": "string"
        },
        "data": {
            "examples": [
                {
                    "email": "bob@test.com",
                    "username": "bob",
                    "password": "banana1234"
                }
            ],
            "type": "object",
            "properties": {
                "email": {
                    "type": "string"
                },
                "username": {
                    "pattern": "^[A-Za-z0-9_-]+$",
                    "minLength": 2,
                    "maxLength": 20,
                    "type": "string"
                },
                "password": {
                    "type": "string"
                }
            },
            "required": [
                "email",
                "username",
                "password"
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
export interface AuthRegisterRequest {
    command: "auth/register/request";
    data: {
        email: string;
        username: string;
        password: string;
    };
}

```
#### Example
```json
{
    "command": "auth/register/request",
    "data": {
        "email": "bob@test.com",
        "username": "bob",
        "password": "banana1234"
    }
}
```
### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "auth/register/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "auth/register/response",
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
                    "const": "auth/register/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "anyOf": [
                        {
                            "const": "email_taken",
                            "type": "string"
                        },
                        {
                            "const": "username_taken",
                            "type": "string"
                        },
                        {
                            "const": "invalid_email",
                            "type": "string"
                        },
                        {
                            "const": "weak_password",
                            "type": "string"
                        },
                        {
                            "const": "username_profanity",
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
export type AuthRegisterResponse =
    | {
          command: "auth/register/response";
          status: "success";
      }
    | {
          command: "auth/register/response";
          status: "failed";
          reason:
              | "email_taken"
              | "username_taken"
              | "invalid_email"
              | "weak_password"
              | "username_profanity"
              | "internal_error";
      };

```
#### Example
```json
{
    "command": "auth/register/response",
    "status": "success"
}
```
---

## getToken

### request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "auth/getToken/request",
    "type": "object",
    "properties": {
        "command": {
            "const": "auth/getToken/request",
            "type": "string"
        },
        "data": {
            "examples": [
                {
                    "email": "bob@test.com",
                    "password": "banana1234"
                }
            ],
            "allOf": [
                {
                    "anyOf": [
                        {
                            "type": "object",
                            "properties": {
                                "email": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "email"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "username"
                            ]
                        }
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "password": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "password"
                    ]
                }
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
export interface AuthGetTokenRequest {
    command: "auth/getToken/request";
    data: (
        | {
              email: string;
          }
        | {
              username: string;
          }
    ) & {
        password: string;
    };
}

```
#### Example
```json
{
    "command": "auth/getToken/request",
    "data": {
        "email": "bob@test.com",
        "password": "banana1234"
    }
}
```
### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "auth/getToken/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "auth/getToken/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                },
                "data": {
                    "examples": [
                        {
                            "token": "d2d5135930dacad758584b2586d03426"
                        }
                    ],
                    "type": "object",
                    "properties": {
                        "token": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "token"
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
                    "const": "auth/getToken/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "anyOf": [
                        {
                            "const": "no_user_found",
                            "type": "string"
                        },
                        {
                            "const": "invalid_password",
                            "type": "string"
                        },
                        {
                            "const": "max_attempts",
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
export type AuthGetTokenResponse =
    | {
          command: "auth/getToken/response";
          status: "success";
          data: {
              token: string;
          };
      }
    | {
          command: "auth/getToken/response";
          status: "failed";
          reason: "no_user_found" | "invalid_password" | "max_attempts" | "internal_error";
      };

```
#### Example
```json
{
    "command": "auth/getToken/response",
    "status": "success",
    "data": {
        "token": "d2d5135930dacad758584b2586d03426"
    }
}
```
---

## login

### request

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "auth/login/request",
    "type": "object",
    "properties": {
        "command": {
            "const": "auth/login/request",
            "type": "string"
        },
        "data": {
            "examples": [
                {
                    "token": "d2d5135930dacad758584b2586d03426"
                }
            ],
            "type": "object",
            "properties": {
                "token": {
                    "type": "string"
                }
            },
            "required": [
                "token"
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
export interface AuthLoginRequest {
    command: "auth/login/request";
    data: {
        token: string;
    };
}

```
#### Example
```json
{
    "command": "auth/login/request",
    "data": {
        "token": "d2d5135930dacad758584b2586d03426"
    }
}
```
### response

<details>
<summary>JSONSchema</summary>

```json
{
    "$id": "auth/login/response",
    "anyOf": [
        {
            "type": "object",
            "properties": {
                "command": {
                    "const": "auth/login/response",
                    "type": "string"
                },
                "status": {
                    "const": "success",
                    "type": "string"
                },
                "data": {
                    "examples": [
                        {
                            "user": {
                                "battleStatus": null,
                                "userId": 123,
                                "email": "bob@test.com",
                                "username": "bob",
                                "isBot": false,
                                "clanId": null,
                                "friends": [
                                    12,
                                    34
                                ],
                                "friendRequests": [
                                    477
                                ],
                                "icons": {
                                    "rank": "silver-5"
                                },
                                "ignores": [],
                                "roles": [
                                    "mentor"
                                ]
                            }
                        }
                    ],
                    "type": "object",
                    "properties": {
                        "user": {
                            "type": "object",
                            "properties": {
                                "userId": {
                                    "type": "integer"
                                },
                                "username": {
                                    "type": "string"
                                },
                                "isBot": {
                                    "type": "boolean"
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
                                "icons": {
                                    "type": "object",
                                    "patternProperties": {
                                        "^(.*)$": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "roles": {
                                    "examples": [
                                        [
                                            "admin",
                                            "moderator",
                                            "mentor"
                                        ]
                                    ],
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "battleStatus": {
                                    "anyOf": [
                                        {
                                            "type": "object",
                                            "properties": {
                                                "lobbyId": {
                                                    "anyOf": [
                                                        {
                                                            "type": "integer"
                                                        },
                                                        {
                                                            "type": "null"
                                                        }
                                                    ]
                                                },
                                                "inGame": {
                                                    "type": "boolean"
                                                },
                                                "away": {
                                                    "type": "boolean"
                                                },
                                                "ready": {
                                                    "type": "boolean"
                                                },
                                                "playerNumber": {
                                                    "anyOf": [
                                                        {
                                                            "type": "integer"
                                                        },
                                                        {
                                                            "type": "null"
                                                        }
                                                    ]
                                                },
                                                "teamColour": {
                                                    "anyOf": [
                                                        {
                                                            "type": "string"
                                                        },
                                                        {
                                                            "type": "null"
                                                        }
                                                    ]
                                                },
                                                "isPlayer": {
                                                    "type": "boolean"
                                                },
                                                "bonus": {
                                                    "type": "number"
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
                                                },
                                                "partyId": {
                                                    "anyOf": [
                                                        {
                                                            "type": "string"
                                                        },
                                                        {
                                                            "type": "null"
                                                        }
                                                    ]
                                                },
                                                "clanTag": {
                                                    "anyOf": [
                                                        {
                                                            "type": "string"
                                                        },
                                                        {
                                                            "type": "null"
                                                        }
                                                    ]
                                                },
                                                "muted": {
                                                    "type": "boolean"
                                                }
                                            },
                                            "required": [
                                                "lobbyId",
                                                "inGame",
                                                "away",
                                                "ready",
                                                "playerNumber",
                                                "teamColour",
                                                "isPlayer",
                                                "bonus",
                                                "sync",
                                                "partyId",
                                                "clanTag",
                                                "muted"
                                            ]
                                        },
                                        {
                                            "type": "null"
                                        }
                                    ]
                                },
                                "email": {
                                    "format": "email",
                                    "type": "string"
                                },
                                "friends": {
                                    "type": "array",
                                    "items": {
                                        "type": "integer"
                                    }
                                },
                                "friendRequests": {
                                    "type": "array",
                                    "items": {
                                        "type": "integer"
                                    }
                                },
                                "ignores": {
                                    "type": "array",
                                    "items": {
                                        "type": "integer"
                                    }
                                }
                            },
                            "required": [
                                "userId",
                                "username",
                                "isBot",
                                "clanId",
                                "icons",
                                "roles",
                                "battleStatus",
                                "email",
                                "friends",
                                "friendRequests",
                                "ignores"
                            ]
                        }
                    },
                    "required": [
                        "user"
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
                    "const": "auth/login/response",
                    "type": "string"
                },
                "status": {
                    "const": "failed",
                    "type": "string"
                },
                "reason": {
                    "anyOf": [
                        {
                            "const": "invalid_token",
                            "type": "string"
                        },
                        {
                            "const": "expired_token",
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
export type AuthLoginResponse =
    | {
          command: "auth/login/response";
          status: "success";
          data: {
              user: {
                  userId: number;
                  username: string;
                  isBot: boolean;
                  clanId: number | null;
                  icons: {
                      [k: string]: string;
                  };
                  roles: string[];
                  battleStatus: {
                      lobbyId: number | null;
                      inGame: boolean;
                      away: boolean;
                      ready: boolean;
                      playerNumber: number | null;
                      teamColour: string | null;
                      isPlayer: boolean;
                      bonus: number;
                      sync: {
                          engine: number;
                          game: number;
                          map: number;
                      };
                      partyId: string | null;
                      clanTag: string | null;
                      muted: boolean;
                  } | null;
                  email: string;
                  friends: number[];
                  friendRequests: number[];
                  ignores: number[];
              };
          };
      }
    | {
          command: "auth/login/response";
          status: "failed";
          reason: "invalid_token" | "expired_token" | "banned" | "internal_error";
      };

```
#### Example
```json
{
    "command": "auth/login/response",
    "status": "success",
    "data": {
        "user": {
            "battleStatus": null,
            "userId": 123,
            "email": "bob@test.com",
            "username": "bob",
            "isBot": false,
            "clanId": null,
            "friends": [
                12,
                34
            ],
            "friendRequests": [
                477
            ],
            "icons": {
                "rank": "silver-5"
            },
            "ignores": [],
            "roles": [
                "mentor"
            ]
        }
    }
}
```
