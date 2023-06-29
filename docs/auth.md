# auth

## register

### request

[JSONSchema](../dist/auth/register/request.json)

#### TypeScript Definition
```ts
{
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
        "email": "anim",
        "username": "HH",
        "password": "anim"
    }
}
```
### response

[JSONSchema](../dist/auth/register/response.json)

#### TypeScript Definition
```ts
export type A =
    | {
          command: "auth/register/response";
          status: "success";
      }
    | {
          command: "auth/register/response";
          status: "failed";
          reason:
              | "internal_error"
              | "email_taken"
              | "username_taken"
              | "invalid_email"
              | "weak_password"
              | "username_profanity";
      };

```
#### Example
```json
{
    "command": "auth/register/response",
    "status": "success"
}
```
## getToken

### request

[JSONSchema](../dist/auth/getToken/request.json)

#### TypeScript Definition
```ts
{
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
    "email": "bob@test.com",
    "username": "bob",
    "password": "1234"
}
```
### response

[JSONSchema](../dist/auth/getToken/response.json)

#### TypeScript Definition
```ts
export type A =
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
          reason: "internal_error" | "no_user_found" | "invalid_password" | "max_attempts";
      };

```
#### Example
```json
{
    "command": "auth/getToken/response",
    "status": "success",
    "data": {
        "token": "anim"
    }
}
```
## login

### request

[JSONSchema](../dist/auth/login/request.json)

#### TypeScript Definition
```ts
{
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
        "token": "anim"
    }
}
```
### response

[JSONSchema](../dist/auth/login/response.json)

#### TypeScript Definition
```ts
export type A =
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
                      /**
                       * This interface was referenced by `undefined`'s JSON-Schema definition
                       * via the `patternProperty` "^(.*)$".
                       */
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
              } & {
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
          reason: "internal_error" | "invalid_token" | "expired_token" | "banned";
      };

```
#### Example
```json
{
    "command": "auth/login/response",
    "status": "success",
    "data": {
        "user": {
            "userId": -75400000,
            "username": "anim",
            "isBot": false,
            "clanId": -75400000,
            "icons": {
                "+": "anim"
            },
            "roles": [
                "admin",
                "moderator",
                "mentor"
            ],
            "battleStatus": {
                "lobbyId": -75400000,
                "inGame": false,
                "away": false,
                "ready": false,
                "playerNumber": -75400000,
                "teamColour": "anim",
                "isPlayer": false,
                "bonus": -75400000,
                "sync": {
                    "engine": -75400000,
                    "game": -75400000,
                    "map": -75400000
                },
                "partyId": "anim",
                "clanTag": "anim",
                "muted": false
            },
            "email": "hhhh@ggggg.dd",
            "friends": [
                -75400000
            ],
            "friendRequests": [
                -75400000
            ],
            "ignores": [
                -75400000
            ]
        }
    }
}
```
