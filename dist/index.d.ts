/**
 * This file was automatically generated, do not edit it manually.
 * Instead modify the .ts files in src/schema and do npm run build
 */

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

export interface Tachyon {
    auth: {
        getToken: {
            request: AuthGetTokenRequest;
            response: AuthGetTokenResponse;
        };
        login: {
            request: AuthLoginRequest;
            response: AuthLoginResponse;
        };
        register: {
            request: AuthRegisterRequest;
            response: AuthRegisterResponse;
        };
    };
    init: {
        init: {
            response: InitInitResponse;
        };
    };
}
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
export interface AuthLoginRequest {
    command: "auth/login/request";
    data: {
        token: string;
    };
}
export interface AuthRegisterRequest {
    command: "auth/register/request";
    data: {
        email: string;
        username: string;
        password: string;
    };
}
export interface BattleStatus {
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
}

export interface UserClient {
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
}

export interface PrivateUserClient {
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
    email: string;
    friends: number[];
    friendRequests: number[];
    ignores: number[];
}

export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface Lobby {
    id: number;
    name: string;
    founderId: number;
    passworded: boolean;
    locked: boolean;
    engineName: string;
    engineVersion: string;
    playerIds: number[];
    spectatorIds: number;
    ip: string;
    settings: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^(.*)$".
         */
        [k: string]: string;
    };
    startAreas: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^(0|[1-9][0-9]*)$".
         */
        [k: string]: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
    };
    mapName: string;
    mapHash: string;
    public: boolean;
    type: "normal" | "replay";
    natType: "none" | "holepunched" | "fixed";
    port: number;
}


export type ServiceId = keyof Tachyon;

export type EndpointId = keyof Tachyon[ServiceId];

export type RequestEndpointId<S extends ServiceId> = keyof {
    [key in keyof Tachyon[S] as Tachyon[S][key] extends { request: any } ? key : never]: Tachyon[S][key];
};

export type ResponseEndpointId<S extends ServiceId> = keyof {
    [key in keyof Tachyon[S] as Tachyon[S][key] extends { response: any } ? key : never]: Tachyon[S][key];
};

export type RequestType<S extends ServiceId, E extends RequestEndpointId<S>> = Tachyon[S][E] extends { request: infer Req } ? Req : object;

export type ResponseType<S extends ServiceId, E extends ResponseEndpointId<S>> = Tachyon[S][E] extends { response: infer Res } ? Res : object;

export type RequestData<S extends ServiceId, E extends RequestEndpointId<S>> = Tachyon[S][E] extends { request: { data: infer Data } } ? Data : never;

export type ResponseData<S extends ServiceId, E extends ResponseEndpointId<S>> = Tachyon[S][E] extends { response: { data: infer Data } } ? Data : never;

export type RemoveField<T, K extends string> = T extends { [P in K]: any } ? Omit<T, K> : never;

export type GetCommands<S extends ServiceId, E extends keyof Tachyon[S]> = Tachyon[S][E];
