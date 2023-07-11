/**
 * This file was automatically generated, do not edit it manually.
 * Instead modify the .ts files in src/schema and do npm run build
 */

export type AccountGetTokenResponse =
    | {
          command: "account/getToken/response";
          status: "success";
          data: {
              token: string;
          };
      }
    | {
          command: "account/getToken/response";
          status: "failed";
          reason: "no_user_found" | "invalid_password" | "max_attempts" | "internal_error";
      };
export type AccountLoginResponse =
    | {
          command: "account/login/response";
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
                      partyId: number | null;
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
          command: "account/login/response";
          status: "failed";
          reason: "invalid_token" | "expired_token" | "banned" | "internal_error";
      };
export type AccountRecoverResponse =
    | {
          command: "account/recover/response";
          status: "success";
      }
    | {
          command: "account/recover/response";
          status: "failed";
          reason: "internal_error";
      };
export type AccountRegisterResponse =
    | {
          command: "account/register/response";
          status: "success";
      }
    | {
          command: "account/register/response";
          status: "failed";
          reason:
              | "email_taken"
              | "username_taken"
              | "invalid_email"
              | "weak_password"
              | "username_profanity"
              | "internal_error";
      };
export type AccountRenameResponse =
    | {
          command: "account/rename/response";
          status: "success";
      }
    | {
          command: "account/rename/response";
          status: "failed";
          reason: "username_taken" | "username_profanity" | "internal_error";
      };
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
export type SystemVersionResponse =
    | {
          command: "system/version/response";
          status: "success";
          data: {
              tachyonVersion: "0.1.0";
          };
      }
    | {
          command: "system/version/response";
          status: "failed";
          reason: "internal_error";
      };

export interface Tachyon {
    account: {
        /**
         * Get an authentication token used for [login](#login).
         */
        getToken: {
            request: AccountGetTokenRequest;
            response: AccountGetTokenResponse;
        };
        /**
         * Login using an authentication token from [getToken](#gettoken).
         */
        login: {
            request: AccountLoginRequest;
            response: AccountLoginResponse;
        };
        /**
         * Should reset the password for the connected user and send it to the associated email address
         */
        recover: {
            request: AccountRecoverRequest;
            response: AccountRecoverResponse;
        };
        /**
         * Registers a new account. The user's password should be hashed twice, once on the client, then again on the server before being stored.
         *
         * The server implementation may wish to verify the account by sending a verification link to the email address.
         */
        register: {
            request: AccountRegisterRequest;
            response: AccountRegisterResponse;
        };
        /**
         * Change username for the current user.
         */
        rename: {
            request: AccountRenameRequest;
            response: AccountRenameResponse;
        };
    };
    autohost: {
        /**
         * Registers the client as slavable by the master server to be used for hosting dedicated lobbies or matchmaking.
         */
        slave: {
            request: AutohostSlaveRequest;
            response: AutohostSlaveResponse;
        };
        /**
         * Unregisters the client as slavable.
         */
        unslave: {
            request: AutohostUnslaveRequest;
            response: AutohostUnslaveResponse;
        };
    };
    lobby: {
        /**
         * Close an existing lobby.
         */
        close: {
            request: LobbyCloseRequest;
            response: LobbyCloseResponse;
        };
        /**
         * Create a new lobby - intended for player clients to summon a dedicated host.
         */
        create: {
            request: LobbyCreateRequest;
            response: LobbyCreateResponse;
        };
        /**
         * Join a custom lobby. Server will send a [joined](#joined) response containing the joined lobby's data.
         */
        join: {
            request: LobbyJoinRequest;
            response: LobbyJoinResponse;
        };
        /**
         * Sent when the client successfully joins a lobby. Can also be sent at any time by the server to forcibly make the client join a lobby.
         */
        joined: {
            response: LobbyJoinedResponse;
        };
        /**
         * Leave the current lobby.
         */
        leave: {
            request: LobbyLeaveRequest;
            response: LobbyLeaveResponse;
        };
        /**
         * Sent when the server removes the client from a lobby.
         */
        left: {
            response: LobbyLeftResponse;
        };
        /**
         * Returns all custom lobbies.
         */
        list: {
            request: LobbyListRequest;
            response: LobbyListResponse;
        };
        /**
         * Receive a lobby message. See (sendMessage)[#sendMessage] for outgoing messages.
         */
        receiveMessage: {
            response: LobbyReceiveMessageResponse;
        };
        /**
         * Send a lobby message. See (receiveMessage)[#receiveMessage] for incoming messages.
         */
        sendMessage: {
            request: LobbySendMessageRequest;
            response: LobbySendMessageResponse;
        };
        /**
         * Server sends this partial object whenever a lobby relevant to the client changes in some way.
         */
        updated: {
            response: LobbyUpdatedResponse;
        };
    };
    matchmaking: {
        /**
         * Cancel queueing for matchmaking. Can also be sent during the ready phase to effectively decline the match.
         */
        cancel: {
            request: MatchmakingCancelRequest;
            response: MatchmakingCancelResponse;
        };
        /**
         * Server should send this when there are enough queued players to form a valid game that meets their criteria. Clients should respond with [ready](#ready).
         */
        found: {
            response: MatchmakingFoundResponse;
        };
        /**
         * Returns all available matchmaking queues.
         */
        list: {
            request: MatchmakingListRequest;
            response: MatchmakingListResponse;
        };
        /**
         * Sent when a found match gets disbanded because a client failed to ready up.
         */
        lost: {
            response: MatchmakingLostResponse;
        };
        /**
         * Queue up for matchmaking. Should cancel the previous queue if already in one.
         */
        queue: {
            request: MatchmakingQueueRequest;
            response: MatchmakingQueueResponse;
        };
        /**
         * Contains some info about the state of the current queue.
         */
        queueUpdate: {
            response: MatchmakingQueueUpdateResponse;
        };
        /**
         * Clients should send this when they are ready to proceed with the found match. If not sent within 10s of the [found](#found) response then queue should be cancelled.
         */
        ready: {
            request: MatchmakingReadyRequest;
            response: MatchmakingReadyResponse;
        };
        /**
         * Sent when a client in a found match readies up.
         */
        readyUpdate: {
            response: MatchmakingReadyUpdateResponse;
        };
    };
    system: {
        /**
         * Sends the current version of the protocol to new Websocket clients as soon as they connect.
         */
        version: {
            response: SystemVersionResponse;
        };
    };
}
export interface AccountGetTokenRequest {
    command: "account/getToken/request";
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
export interface AccountLoginRequest {
    command: "account/login/request";
    data: {
        token: string;
    };
}
export interface AccountRecoverRequest {
    command: "account/recover/request";
}
export interface AccountRegisterRequest {
    command: "account/register/request";
    data: {
        email: string;
        username: string;
        hashedPassword: string;
    };
}
export interface AccountRenameRequest {
    command: "account/rename/request";
    data: {
        newUsername: string;
    };
}
export interface AutohostSlaveRequest {
    command: "autohost/slave/request";
}
export interface AutohostUnslaveRequest {
    command: "autohost/unslave/request";
}
export interface LobbyCloseRequest {
    command: "lobby/close/request";
}
export interface LobbyCreateRequest {
    command: "lobby/create/request";
    data: {
        title: string;
        private: boolean;
        region: string;
        maxPlayers: number;
    };
}
export interface LobbyJoinRequest {
    command: "lobby/join/request";
    data: {
        lobbyId: number;
        password?: string;
    };
}
export interface LobbyLeaveRequest {
    command: "lobby/leave/request";
}
export interface LobbyListRequest {
    command: "lobby/list/request";
}
export interface LobbySendMessageRequest {
    command: "lobby/sendMessage/request";
    data: {
        message: string;
    };
}
export interface MatchmakingCancelRequest {
    command: "matchmaking/cancel/request";
}
export interface MatchmakingListRequest {
    command: "matchmaking/list/request";
}
export interface MatchmakingQueueRequest {
    command: "matchmaking/queue/request";
    data: {
        /**
         * @minItems 1
         */
        queues: [string, ...string[]];
    };
}
export interface MatchmakingReadyRequest {
    command: "matchmaking/ready/request";
}
export type Username = string;

export type Email = string;

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
    partyId: number | null;
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
        partyId: number | null;
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
        partyId: number | null;
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
    democracy: boolean;
    private: boolean;
    playerIds: number[];
    spectatorIds: number[];
    engine: string;
    game: string;
    map: string;
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
    minTeamsize: number | null;
    maxTeamsize: number | null;
    minRating: number | null;
    maxRating: number | null;
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
