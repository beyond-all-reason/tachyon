/**
 * This file was automatically generated, do not edit it manually.
 * Instead modify the .ts files in src/schema and do npm run build
 */

export type AccountGetTokenResponse =
    | {
          messageId: string;
          commandId: "account/getToken/response";
          status: "success";
          data: {
              token: string;
          };
      }
    | {
          messageId: string;
          commandId: "account/getToken/response";
          status: "failed";
          reason: "no_user_found";
      }
    | {
          messageId: string;
          commandId: "account/getToken/response";
          status: "failed";
          reason: "unverified";
      }
    | {
          messageId: string;
          commandId: "account/getToken/response";
          status: "failed";
          reason: "invalid_password";
      }
    | {
          messageId: string;
          commandId: "account/getToken/response";
          status: "failed";
          reason: "max_attempts";
      }
    | {
          messageId: string;
          commandId: "account/getToken/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "account/getToken/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "account/getToken/response";
          status: "failed";
          reason: "invalid_command";
      };
export type AccountLoginResponse =
    | {
          messageId: string;
          commandId: "account/login/response";
          status: "success";
          data: {
              user: {
                  userId: number;
                  username: string;
                  clanId: number | null;
                  icons: {
                      /**
                       * This interface was referenced by `undefined`'s JSON-Schema definition
                       * via the `patternProperty` "^(.*)$".
                       */
                      [k: string]: string;
                  };
                  roles: ("admin" | "moderator" | "autohost" | "mentor" | "caster" | "tourney")[];
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
          messageId: string;
          commandId: "account/login/response";
          status: "failed";
          reason: "invalid_token";
      }
    | {
          messageId: string;
          commandId: "account/login/response";
          status: "failed";
          reason: "expired_token";
      }
    | {
          messageId: string;
          commandId: "account/login/response";
          status: "failed";
          reason: "unvalidated";
      }
    | {
          messageId: string;
          commandId: "account/login/response";
          status: "failed";
          reason: "banned";
      }
    | {
          messageId: string;
          commandId: "account/login/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "account/login/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "account/login/response";
          status: "failed";
          reason: "invalid_command";
      };
export type AccountRecoverResponse =
    | {
          messageId: string;
          commandId: "account/recover/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "account/recover/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "account/recover/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "account/recover/response";
          status: "failed";
          reason: "invalid_command";
      };
export type AccountRegisterResponse =
    | {
          messageId: string;
          commandId: "account/register/response";
          status: "success";
          data: {
              /**
               * If enabled, the server should email users a one-time verification link.
               */
              verificationRequired: boolean;
          };
      }
    | {
          messageId: string;
          commandId: "account/register/response";
          status: "failed";
          reason: "email_taken";
      }
    | {
          messageId: string;
          commandId: "account/register/response";
          status: "failed";
          reason: "username_taken";
      }
    | {
          messageId: string;
          commandId: "account/register/response";
          status: "failed";
          reason: "invalid_email";
      }
    | {
          messageId: string;
          commandId: "account/register/response";
          status: "failed";
          reason: "weak_password";
      }
    | {
          messageId: string;
          commandId: "account/register/response";
          status: "failed";
          reason: "username_profanity";
      }
    | {
          messageId: string;
          commandId: "account/register/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "account/register/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "account/register/response";
          status: "failed";
          reason: "invalid_command";
      };
export type AccountRenameResponse =
    | {
          messageId: string;
          commandId: "account/rename/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "account/rename/response";
          status: "failed";
          reason: "username_taken";
      }
    | {
          messageId: string;
          commandId: "account/rename/response";
          status: "failed";
          reason: "username_profanity";
      }
    | {
          messageId: string;
          commandId: "account/rename/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "account/rename/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "account/rename/response";
          status: "failed";
          reason: "invalid_command";
      };
export type BotSlaveResponse =
    | {
          messageId: string;
          commandId: "bot/slave/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "bot/slave/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "bot/slave/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "bot/slave/response";
          status: "failed";
          reason: "invalid_command";
      };
export type BotUnslaveResponse =
    | {
          messageId: string;
          commandId: "bot/unslave/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "bot/unslave/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "bot/unslave/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "bot/unslave/response";
          status: "failed";
          reason: "invalid_command";
      };
export type GameLaunchResponse =
    | {
          messageId: string;
          commandId: "game/launch/response";
          status: "success";
          data: {
              script: string;
          };
      }
    | {
          messageId: string;
          commandId: "game/launch/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "game/launch/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "game/launch/response";
          status: "failed";
          reason: "invalid_command";
      };
export type LobbyCloseResponse =
    | {
          messageId: string;
          commandId: "lobby/close/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "lobby/close/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "lobby/close/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "lobby/close/response";
          status: "failed";
          reason: "invalid_command";
      };
export type LobbyCreateResponse =
    | {
          messageId: string;
          commandId: "lobby/create/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "lobby/create/response";
          status: "failed";
          reason: "no_hosts_available";
      }
    | {
          messageId: string;
          commandId: "lobby/create/response";
          status: "failed";
          reason: "invalid_region";
      }
    | {
          messageId: string;
          commandId: "lobby/create/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "lobby/create/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "lobby/create/response";
          status: "failed";
          reason: "invalid_command";
      };
export type LobbyJoinResponse =
    | {
          messageId: string;
          commandId: "lobby/join/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "lobby/join/response";
          status: "failed";
          reason: "locked";
      }
    | {
          messageId: string;
          commandId: "lobby/join/response";
          status: "failed";
          reason: "requires_password";
      }
    | {
          messageId: string;
          commandId: "lobby/join/response";
          status: "failed";
          reason: "invalid_password";
      }
    | {
          messageId: string;
          commandId: "lobby/join/response";
          status: "failed";
          reason: "max_participants_reached";
      }
    | {
          messageId: string;
          commandId: "lobby/join/response";
          status: "failed";
          reason: "rank_too_low";
      }
    | {
          messageId: string;
          commandId: "lobby/join/response";
          status: "failed";
          reason: "rank_too_high";
      }
    | {
          messageId: string;
          commandId: "lobby/join/response";
          status: "failed";
          reason: "banned";
      }
    | {
          messageId: string;
          commandId: "lobby/join/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "lobby/join/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "lobby/join/response";
          status: "failed";
          reason: "invalid_command";
      };
export type LobbyJoinedResponse =
    | {
          messageId: string;
          commandId: "lobby/joined/response";
          status: "success";
          data: {
              id: number;
              name: string;
              founderId: number;
              locked: boolean;
              passworded: boolean;
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
              limits: {
                  minTeamsize: number | null;
                  maxTeamsize: number | null;
                  minRating: number | null;
                  maxRating: number | null;
              };
          };
      }
    | {
          messageId: string;
          commandId: "lobby/joined/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "lobby/joined/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "lobby/joined/response";
          status: "failed";
          reason: "invalid_command";
      };
export type LobbyLeaveResponse =
    | {
          messageId: string;
          commandId: "lobby/leave/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "lobby/leave/response";
          status: "failed";
          reason: "no_lobby";
      }
    | {
          messageId: string;
          commandId: "lobby/leave/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "lobby/leave/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "lobby/leave/response";
          status: "failed";
          reason: "invalid_command";
      };
export type LobbyLeftResponse =
    | {
          messageId: string;
          commandId: "lobby/left/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "lobby/left/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "lobby/left/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "lobby/left/response";
          status: "failed";
          reason: "invalid_command";
      };
export type LobbyListResponse =
    | {
          messageId: string;
          commandId: "lobby/list/response";
          status: "success";
          data: {
              lobbies: {
                  id: number;
                  name: string;
                  founderId: number;
                  locked: boolean;
                  passworded: boolean;
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
                  limits: {
                      minTeamsize: number | null;
                      maxTeamsize: number | null;
                      minRating: number | null;
                      maxRating: number | null;
                  };
              }[];
          };
      }
    | {
          messageId: string;
          commandId: "lobby/list/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "lobby/list/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "lobby/list/response";
          status: "failed";
          reason: "invalid_command";
      };
export type LobbyReceiveMessageResponse =
    | {
          messageId: string;
          commandId: "lobby/receiveMessage/response";
          status: "success";
          data: {
              userId: number;
              message: string;
          };
      }
    | {
          messageId: string;
          commandId: "lobby/receiveMessage/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "lobby/receiveMessage/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "lobby/receiveMessage/response";
          status: "failed";
          reason: "invalid_command";
      };
export type LobbySendMessageResponse =
    | {
          messageId: string;
          commandId: "lobby/sendMessage/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "lobby/sendMessage/response";
          status: "failed";
          reason: "not_in_lobby";
      }
    | {
          messageId: string;
          commandId: "lobby/sendMessage/response";
          status: "failed";
          reason: "muted";
      }
    | {
          messageId: string;
          commandId: "lobby/sendMessage/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "lobby/sendMessage/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "lobby/sendMessage/response";
          status: "failed";
          reason: "invalid_command";
      };
export type LobbyUpdatedResponse =
    | {
          messageId: string;
          commandId: "lobby/updated/response";
          status: "success";
          data: {
              id?: number;
              name?: string;
              founderId?: number;
              locked?: boolean;
              passworded?: boolean;
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
              limits?: {
                  minTeamsize: number | null;
                  maxTeamsize: number | null;
                  minRating: number | null;
                  maxRating: number | null;
              };
          };
      }
    | {
          messageId: string;
          commandId: "lobby/updated/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "lobby/updated/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "lobby/updated/response";
          status: "failed";
          reason: "invalid_command";
      };
export type MatchmakingCancelResponse =
    | {
          messageId: string;
          commandId: "matchmaking/cancel/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "matchmaking/cancel/response";
          status: "failed";
          reason: "not_queued";
      }
    | {
          messageId: string;
          commandId: "matchmaking/cancel/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "matchmaking/cancel/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "matchmaking/cancel/response";
          status: "failed";
          reason: "invalid_command";
      };
export type MatchmakingFoundResponse =
    | {
          messageId: string;
          commandId: "matchmaking/found/response";
          status: "success";
          data: {
              queueId: string;
          };
      }
    | {
          messageId: string;
          commandId: "matchmaking/found/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "matchmaking/found/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "matchmaking/found/response";
          status: "failed";
          reason: "invalid_command";
      };
export type MatchmakingListResponse =
    | {
          messageId: string;
          commandId: "matchmaking/list/response";
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
          messageId: string;
          commandId: "matchmaking/list/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "matchmaking/list/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "matchmaking/list/response";
          status: "failed";
          reason: "invalid_command";
      };
export type MatchmakingLostResponse =
    | {
          messageId: string;
          commandId: "matchmaking/lost/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "matchmaking/lost/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "matchmaking/lost/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "matchmaking/lost/response";
          status: "failed";
          reason: "invalid_command";
      };
export type MatchmakingQueueResponse =
    | {
          messageId: string;
          commandId: "matchmaking/queue/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "matchmaking/queue/response";
          status: "failed";
          reason: "invalid_queue_specified";
      }
    | {
          messageId: string;
          commandId: "matchmaking/queue/response";
          status: "failed";
          reason: "already_ingame";
      }
    | {
          messageId: string;
          commandId: "matchmaking/queue/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "matchmaking/queue/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "matchmaking/queue/response";
          status: "failed";
          reason: "invalid_command";
      };
export type MatchmakingQueueUpdateResponse =
    | {
          messageId: string;
          commandId: "matchmaking/queueUpdate/response";
          status: "success";
          data: {
              playersQueued: number;
          };
      }
    | {
          messageId: string;
          commandId: "matchmaking/queueUpdate/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "matchmaking/queueUpdate/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "matchmaking/queueUpdate/response";
          status: "failed";
          reason: "invalid_command";
      };
export type MatchmakingReadyResponse =
    | {
          messageId: string;
          commandId: "matchmaking/ready/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "matchmaking/ready/response";
          status: "failed";
          reason: "no_match";
      }
    | {
          messageId: string;
          commandId: "matchmaking/ready/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "matchmaking/ready/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "matchmaking/ready/response";
          status: "failed";
          reason: "invalid_command";
      };
export type MatchmakingReadyUpdateResponse =
    | {
          messageId: string;
          commandId: "matchmaking/readyUpdate/response";
          status: "success";
          data: {
              readyMax: number;
              readyCurrent: number;
          };
      }
    | {
          messageId: string;
          commandId: "matchmaking/readyUpdate/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "matchmaking/readyUpdate/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "matchmaking/readyUpdate/response";
          status: "failed";
          reason: "invalid_command";
      };
export type SystemDisconnectedResponse =
    | {
          messageId: string;
          commandId: "system/disconnected/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "system/disconnected/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "system/disconnected/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "system/disconnected/response";
          status: "failed";
          reason: "invalid_command";
      };
export type SystemVersionResponse =
    | {
          messageId: string;
          commandId: "system/version/response";
          status: "success";
          data: {
              tachyonVersion: "0.1.12";
              versionParity: "major_mismatch" | "minor_mismatch" | "patch_mismatch" | "match" | "unknown";
          };
      }
    | {
          messageId: string;
          commandId: "system/version/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "system/version/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "system/version/response";
          status: "failed";
          reason: "invalid_command";
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
         * Registers a new account. The user's password should be hashed twice, once on the client (md5), then again on the server (something stronger) before being stored.
         *
         * The server implementation may wish to verify the account by sending a verification link to the email address. `hashedPassword` implies that the user's password should be hashed twice, once on the client-side, and then again on the server. Doing this ensures even the server can never know the user's plaintext password.
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
    bot: {
        /**
         * Registers the client as slavable by the master server to be used for hosting dedicated lobbies or matchmaking.
         */
        slave: {
            request: BotSlaveRequest;
            response: BotSlaveResponse;
        };
        /**
         * Unregisters the client as slavable.
         */
        unslave: {
            request: BotUnslaveRequest;
            response: BotUnslaveResponse;
        };
    };
    game: {
        /**
         * When a client receives this response it should launch the game with the start script.
         */
        launch: {
            response: GameLaunchResponse;
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
         * Receive a lobby message. See [sendMessage](#sendmessage) for outgoing messages.
         */
        receiveMessage: {
            response: LobbyReceiveMessageResponse;
        };
        /**
         * Send a lobby message. See [receiveMessage](#receivemessage) for incoming messages.
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
         * Ask the server to terminate the connection. The server will send a [disconnected](#disconnected) response.
         */
        disconnect: {
            request: SystemDisconnectRequest;
        };
        /**
         * Sent when the server terminates the WebSocket connection with the client.
         */
        disconnected: {
            response: SystemDisconnectedResponse;
        };
        /**
         * Sends the current version of the protocol to new Websocket clients as soon as they connect.
         *
         *         Clients should send the version they're using in the WS connection URL, e.g. ?tachyonVersion=1.1.2.
         */
        version: {
            response: SystemVersionResponse;
        };
    };
}
export interface AccountGetTokenRequest {
    messageId: string;
    commandId: "account/getToken/request";
    data: (
        | {
              email: string;
          }
        | {
              username: string;
          }
    ) & {
        /**
         * md5 hash of the user's password input
         */
        hashedPassword: string;
    };
}
export interface AccountLoginRequest {
    messageId: string;
    commandId: "account/login/request";
    data: {
        token: string;
    };
}
export interface AccountRecoverRequest {
    messageId: string;
    commandId: "account/recover/request";
}
export interface AccountRegisterRequest {
    messageId: string;
    commandId: "account/register/request";
    data: {
        email: string;
        username: string;
        password: string;
    };
}
export interface AccountRenameRequest {
    messageId: string;
    commandId: "account/rename/request";
    data: {
        newUsername: string;
    };
}
export interface BotSlaveRequest {
    messageId: string;
    commandId: "bot/slave/request";
    data: {
        maxBattles: number;
    };
}
export interface BotUnslaveRequest {
    messageId: string;
    commandId: "bot/unslave/request";
}
export interface LobbyCloseRequest {
    messageId: string;
    commandId: "lobby/close/request";
}
export interface LobbyCreateRequest {
    messageId: string;
    commandId: "lobby/create/request";
    data: {
        title: string;
        private: boolean;
        region: string;
        maxPlayers: number;
    };
}
export interface LobbyJoinRequest {
    messageId: string;
    commandId: "lobby/join/request";
    data: {
        lobbyId: number;
        password?: string;
    };
}
export interface LobbyLeaveRequest {
    messageId: string;
    commandId: "lobby/leave/request";
}
export interface LobbyListRequest {
    messageId: string;
    commandId: "lobby/list/request";
}
export interface LobbySendMessageRequest {
    messageId: string;
    commandId: "lobby/sendMessage/request";
    data: {
        message: string;
    };
}
export interface MatchmakingCancelRequest {
    messageId: string;
    commandId: "matchmaking/cancel/request";
}
export interface MatchmakingListRequest {
    messageId: string;
    commandId: "matchmaking/list/request";
}
export interface MatchmakingQueueRequest {
    messageId: string;
    commandId: "matchmaking/queue/request";
    data: {
        /**
         * @minItems 1
         */
        queues: [string, ...string[]];
    };
}
export interface MatchmakingReadyRequest {
    messageId: string;
    commandId: "matchmaking/ready/request";
}
export interface SystemDisconnectRequest {
    messageId: string;
    commandId: "system/disconnect/request";
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
    clanId: number | null;
    icons: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^(.*)$".
         */
        [k: string]: string;
    };
    roles: ("admin" | "moderator" | "autohost" | "mentor" | "caster" | "tourney")[];
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
    clanId: number | null;
    icons: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^(.*)$".
         */
        [k: string]: string;
    };
    roles: ("admin" | "moderator" | "autohost" | "mentor" | "caster" | "tourney")[];
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
    locked: boolean;
    passworded: boolean;
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
    limits: {
        minTeamsize: number | null;
        maxTeamsize: number | null;
        minRating: number | null;
        maxRating: number | null;
    };
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
import { ValidateFunction } from 'ajv';

declare const tachyonMeta: {
    version: string;
    ids: Record<string, Record<string, string[]>>;
};
declare function getValidator<T extends {
    command: string;
}>(command: T): ValidateFunction<T>;

export { getValidator, tachyonMeta };
