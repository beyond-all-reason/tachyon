import { EmptyObject } from 'type-fest';
import { ValidateFunction } from 'ajv';

type ServiceId = keyof Tachyon;
type EndpointId<S extends ServiceId> = keyof Tachyon[S];
type Command<S extends ServiceId, E extends EndpointId<S>> = Tachyon[S][E];
type RequestId<S extends ServiceId> = {
    [K in EndpointId<S>]: Request<S, K> extends never ? never : K;
}[EndpointId<S>];
type ResponseId<S extends ServiceId> = {
    [K in EndpointId<S>]: Response<S, K> extends never ? never : K;
}[EndpointId<S>];
type Request<S extends ServiceId, E extends EndpointId<S>> = Command<S, E> extends {
    request: infer Request;
} ? Request : never;
type Response<S extends ServiceId, E extends EndpointId<S>> = Command<S, E> extends {
    response: infer Response;
} ? Response : never;
type RequestData<S extends ServiceId, E extends EndpointId<S>> = Request<S, E> extends {
    data: infer Data;
} ? Data : never;
type SuccessResponseData<S extends ServiceId, E extends EndpointId<S>> = Response<S, E> & {
    status: "success";
} extends {
    data: infer Data;
} ? Data : never;
type EmptyRequestId<S extends ServiceId> = {
    [K in RequestId<S>]: RequestData<S, K> extends EmptyObject ? K : never;
}[RequestId<S>];
type DataRequestId<S extends ServiceId> = {
    [K in RequestId<S>]: RequestData<S, K> extends EmptyObject ? never : K;
}[RequestId<S>];
type GenericRequestCommand = {
    messageId: string;
    commandId: string;
    data?: Record<string, unknown>;
};

declare const tachyonMeta: {
    readonly version: "0.3.1";
    readonly ids: {
        readonly bot: {
            readonly slave: readonly ["request", "response"];
            readonly unslave: readonly ["request", "response"];
        };
        readonly customBattle: {
            readonly close: readonly ["request", "response"];
            readonly create: readonly ["request", "response"];
            readonly join: readonly ["request", "response"];
            readonly joined: readonly ["response"];
            readonly leave: readonly ["request", "response"];
            readonly left: readonly ["response"];
            readonly list: readonly ["request", "response"];
            readonly receiveMessage: readonly ["response"];
            readonly sendMessage: readonly ["request", "response"];
            readonly subscribe: readonly ["request", "response"];
            readonly unsubscribe: readonly ["request", "response"];
            readonly updated: readonly ["response"];
        };
        readonly game: {
            readonly launch: readonly ["response"];
        };
        readonly matchmaking: {
            readonly cancel: readonly ["request", "response"];
            readonly found: readonly ["response"];
            readonly list: readonly ["request", "response"];
            readonly lost: readonly ["response"];
            readonly queue: readonly ["request", "response"];
            readonly queueUpdate: readonly ["response"];
            readonly ready: readonly ["request", "response"];
            readonly readyUpdate: readonly ["response"];
        };
        readonly system: {
            readonly connected: readonly ["response"];
            readonly disconnect: readonly ["request"];
            readonly serverStats: readonly ["request", "response"];
        };
    };
};

declare function getValidator<T extends {
    commandId: string;
}>(command: T): ValidateFunction<T>;

export { Command, DataRequestId, EmptyRequestId, EndpointId, GenericRequestCommand, Request, RequestData, RequestId, Response, ResponseId, ServiceId, SuccessResponseData, getValidator, tachyonMeta };

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
export type CustomBattleCloseResponse =
    | {
          messageId: string;
          commandId: "customBattle/close/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "customBattle/close/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "customBattle/close/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "customBattle/close/response";
          status: "failed";
          reason: "invalid_command";
      };
export type CustomBattleCreateResponse =
    | {
          messageId: string;
          commandId: "customBattle/create/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "customBattle/create/response";
          status: "failed";
          reason: "no_hosts_available";
      }
    | {
          messageId: string;
          commandId: "customBattle/create/response";
          status: "failed";
          reason: "invalid_region";
      }
    | {
          messageId: string;
          commandId: "customBattle/create/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "customBattle/create/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "customBattle/create/response";
          status: "failed";
          reason: "invalid_command";
      };
export type CustomBattleJoinResponse =
    | {
          messageId: string;
          commandId: "customBattle/join/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "customBattle/join/response";
          status: "failed";
          reason: "locked";
      }
    | {
          messageId: string;
          commandId: "customBattle/join/response";
          status: "failed";
          reason: "requires_password";
      }
    | {
          messageId: string;
          commandId: "customBattle/join/response";
          status: "failed";
          reason: "invalid_password";
      }
    | {
          messageId: string;
          commandId: "customBattle/join/response";
          status: "failed";
          reason: "max_participants_reached";
      }
    | {
          messageId: string;
          commandId: "customBattle/join/response";
          status: "failed";
          reason: "rank_too_low";
      }
    | {
          messageId: string;
          commandId: "customBattle/join/response";
          status: "failed";
          reason: "rank_too_high";
      }
    | {
          messageId: string;
          commandId: "customBattle/join/response";
          status: "failed";
          reason: "banned";
      }
    | {
          messageId: string;
          commandId: "customBattle/join/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "customBattle/join/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "customBattle/join/response";
          status: "failed";
          reason: "invalid_command";
      };
export type CustomBattleJoinedResponse =
    | {
          messageId: string;
          commandId: "customBattle/joined/response";
          status: "success";
          data: {
              battleId: number;
              hostId: number;
              engine: string;
              game: string;
              map: string;
              startPosType: 0 | 1 | 2;
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
              startTime: number | null;
              ip: string | null;
              port: number | null;
              scriptPassword: string | null;
              modOptions: {
                  /**
                   * This interface was referenced by `undefined`'s JSON-Schema definition
                   * via the `patternProperty` "^(.*)$".
                   */
                  [k: string]: unknown;
              };
              bots: ({
                  playerId: number;
                  teamId: number;
                  color: string;
                  bonus: number;
                  inGame: boolean;
              } & {
                  isSpectator: false;
                  isBot: true;
                  ownerId: number;
                  aiShortName: string;
                  name: string;
                  aiOptions: {
                      /**
                       * This interface was referenced by `undefined`'s JSON-Schema definition
                       * via the `patternProperty` "^(.*)$".
                       */
                      [k: string]: unknown;
                  };
                  faction: string;
              })[];
              users: {
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
              }[];
          };
      }
    | {
          messageId: string;
          commandId: "customBattle/joined/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "customBattle/joined/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "customBattle/joined/response";
          status: "failed";
          reason: "invalid_command";
      };
export type CustomBattleLeaveResponse =
    | {
          messageId: string;
          commandId: "customBattle/leave/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "customBattle/leave/response";
          status: "failed";
          reason: "no_lobby";
      }
    | {
          messageId: string;
          commandId: "customBattle/leave/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "customBattle/leave/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "customBattle/leave/response";
          status: "failed";
          reason: "invalid_command";
      };
export type CustomBattleLeftResponse =
    | {
          messageId: string;
          commandId: "customBattle/left/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "customBattle/left/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "customBattle/left/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "customBattle/left/response";
          status: "failed";
          reason: "invalid_command";
      };
export type CustomBattleListResponse =
    | {
          messageId: string;
          commandId: "customBattle/list/response";
          status: "success";
          data: {
              battles: ({
                  battleId: number;
                  hostId: number;
                  engine: string;
                  game: string;
                  map: string;
                  startPosType: 0 | 1 | 2;
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
                  startTime: number | null;
                  ip: string | null;
                  port: number | null;
                  scriptPassword: string | null;
                  modOptions: {
                      /**
                       * This interface was referenced by `undefined`'s JSON-Schema definition
                       * via the `patternProperty` "^(.*)$".
                       */
                      [k: string]: unknown;
                  };
                  bots: ({
                      playerId: number;
                      teamId: number;
                      color: string;
                      bonus: number;
                      inGame: boolean;
                  } & {
                      isSpectator: false;
                      isBot: true;
                      ownerId: number;
                      aiShortName: string;
                      name: string;
                      aiOptions: {
                          /**
                           * This interface was referenced by `undefined`'s JSON-Schema definition
                           * via the `patternProperty` "^(.*)$".
                           */
                          [k: string]: unknown;
                      };
                      faction: string;
                  })[];
                  users: {
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
                  }[];
              } & {
                  title: string;
                  locked: boolean;
                  passworded: boolean;
                  bossIds: number[];
                  joinQueueIds: number[];
                  limits: {
                      minTeamsize: number | null;
                      maxTeamsize: number | null;
                      minRating: number | null;
                      maxRating: number | null;
                  };
              })[];
          };
      }
    | {
          messageId: string;
          commandId: "customBattle/list/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "customBattle/list/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "customBattle/list/response";
          status: "failed";
          reason: "invalid_command";
      };
export type CustomBattleReceiveMessageResponse =
    | {
          messageId: string;
          commandId: "customBattle/receiveMessage/response";
          status: "success";
          data: {
              userId: number;
              message: string;
          };
      }
    | {
          messageId: string;
          commandId: "customBattle/receiveMessage/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "customBattle/receiveMessage/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "customBattle/receiveMessage/response";
          status: "failed";
          reason: "invalid_command";
      };
export type CustomBattleSendMessageResponse =
    | {
          messageId: string;
          commandId: "customBattle/sendMessage/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "customBattle/sendMessage/response";
          status: "failed";
          reason: "not_in_lobby";
      }
    | {
          messageId: string;
          commandId: "customBattle/sendMessage/response";
          status: "failed";
          reason: "muted";
      }
    | {
          messageId: string;
          commandId: "customBattle/sendMessage/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "customBattle/sendMessage/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "customBattle/sendMessage/response";
          status: "failed";
          reason: "invalid_command";
      };
export type CustomBattleSubscribeResponse =
    | {
          messageId: string;
          commandId: "customBattle/subscribe/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "customBattle/subscribe/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "customBattle/subscribe/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "customBattle/subscribe/response";
          status: "failed";
          reason: "invalid_command";
      };
export type CustomBattleUnsubscribeResponse =
    | {
          messageId: string;
          commandId: "customBattle/unsubscribe/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "customBattle/unsubscribe/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "customBattle/unsubscribe/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "customBattle/unsubscribe/response";
          status: "failed";
          reason: "invalid_command";
      };
export type CustomBattleUpdatedResponse =
    | {
          messageId: string;
          commandId: "customBattle/updated/response";
          status: "success";
          data: {
              battles: ({
                  battleId?: number;
                  hostId?: number;
                  engine?: string;
                  game?: string;
                  map?: string;
                  startPosType?: 0 | 1 | 2;
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
                  startTime?: number | null;
                  ip?: string | null;
                  port?: number | null;
                  scriptPassword?: string | null;
                  modOptions?: {
                      /**
                       * This interface was referenced by `undefined`'s JSON-Schema definition
                       * via the `patternProperty` "^(.*)$".
                       */
                      [k: string]: unknown;
                  };
                  bots?: ({
                      playerId: number;
                      teamId: number;
                      color: string;
                      bonus: number;
                      inGame: boolean;
                  } & {
                      isSpectator: false;
                      isBot: true;
                      ownerId: number;
                      aiShortName: string;
                      name: string;
                      aiOptions: {
                          /**
                           * This interface was referenced by `undefined`'s JSON-Schema definition
                           * via the `patternProperty` "^(.*)$".
                           */
                          [k: string]: unknown;
                      };
                      faction: string;
                  })[];
                  users?: {
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
                  }[];
              } & {
                  title?: string;
                  locked?: boolean;
                  passworded?: boolean;
                  bossIds?: number[];
                  joinQueueIds?: number[];
                  limits?: {
                      minTeamsize: number | null;
                      maxTeamsize: number | null;
                      minRating: number | null;
                      maxRating: number | null;
                  };
              })[];
          };
      }
    | {
          messageId: string;
          commandId: "customBattle/updated/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "customBattle/updated/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "customBattle/updated/response";
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
              playlists: {
                  id: string;
                  name: string;
                  ranked: boolean;
                  teamSize: number;
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

export interface Tachyon {
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
    customBattle: {
        /**
         * Close an existing lobby.
         */
        close: {
            request: CustomBattleCloseRequest;
            response: CustomBattleCloseResponse;
        };
        /**
         * Create a new lobby - intended for player clients to summon a dedicated host.
         */
        create: {
            request: CustomBattleCreateRequest;
            response: CustomBattleCreateResponse;
        };
        /**
         * Join a custom lobby. Server will send a [joined](#joined) response containing the joined lobby's data.
         * These commands are split because the server may want to force the client to join a battle without them explicitly requesting it.
         */
        join: {
            request: CustomBattleJoinRequest;
            response: CustomBattleJoinResponse;
        };
        /**
         * Sent when the client successfully joins a lobby. Can also be sent at any time by the server to forcibly make the client join a lobby.
         */
        joined: {
            response: CustomBattleJoinedResponse;
        };
        /**
         * Leave the current lobby.
         */
        leave: {
            request: CustomBattleLeaveRequest;
            response: CustomBattleLeaveResponse;
        };
        /**
         * Sent when the server removes the client from a lobby.
         */
        left: {
            response: CustomBattleLeftResponse;
        };
        /**
         * Returns all custom lobbies.
         */
        list: {
            request: CustomBattleListRequest;
            response: CustomBattleListResponse;
        };
        /**
         * Receive a lobby message. See [sendMessage](#sendmessage) for outgoing messages.
         */
        receiveMessage: {
            response: CustomBattleReceiveMessageResponse;
        };
        /**
         * Send a lobby message. See [receiveMessage](#receivemessage) for incoming messages.
         */
        sendMessage: {
            request: CustomBattleSendMessageRequest;
            response: CustomBattleSendMessageResponse;
        };
        /**
         * Subscribe to custom battle updates. If battleIds is passed only updates to those battles will be sent, otherwise updates for all battles will be sent.
         */
        subscribe: {
            request: CustomBattleSubscribeRequest;
            response: CustomBattleSubscribeResponse;
        };
        /**
         * Unsubscribe from custom battle updates. If battleIds is passed only updates to those battles will be stopped, otherwise this will stop updates for all battles.
         */
        unsubscribe: {
            request: CustomBattleUnsubscribeRequest;
            response: CustomBattleUnsubscribeResponse;
        };
        /**
         * Server sends an array of partial battle objects whenever a subscribed battle changes in some way.
         */
        updated: {
            response: CustomBattleUpdatedResponse;
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
         * Returns all available matchmaking playlists.
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
         * Sent immediately by the server on connection.
         */
        connected: {
            response: SystemConnectedResponse;
        };
        /**
         * Ask the server to terminate the connection.
         */
        disconnect: {
            request: SystemDisconnectRequest;
        };
        /**
         * Get server stats such as user count.
         */
        serverStats: {
            request: SystemServerStatsRequest;
            response: SystemServerStatsResponse;
        };
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
export interface CustomBattleCloseRequest {
    messageId: string;
    commandId: "customBattle/close/request";
}
export interface CustomBattleCreateRequest {
    messageId: string;
    commandId: "customBattle/create/request";
    data: {
        title: string;
        private: boolean;
        region: string;
        maxPlayers: number;
    };
}
export interface CustomBattleJoinRequest {
    messageId: string;
    commandId: "customBattle/join/request";
    data: {
        lobbyId: number;
        password?: string;
    };
}
export interface CustomBattleLeaveRequest {
    messageId: string;
    commandId: "customBattle/leave/request";
}
export interface CustomBattleListRequest {
    messageId: string;
    commandId: "customBattle/list/request";
}
export interface CustomBattleSendMessageRequest {
    messageId: string;
    commandId: "customBattle/sendMessage/request";
    data: {
        message: string;
    };
}
export interface CustomBattleSubscribeRequest {
    messageId: string;
    commandId: "customBattle/subscribe/request";
    data: {
        battleIds?: number[];
    };
}
export interface CustomBattleUnsubscribeRequest {
    messageId: string;
    commandId: "customBattle/unsubscribe/request";
    data: {
        battleIds?: number[];
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
export interface SystemServerStatsRequest {
    messageId: string;
    commandId: "system/serverStats/request";
}
export interface TachyonBattleContender {
    playerId: number;
    teamId: number;
    color: string;
    bonus: number;
    inGame: boolean;
}

export type TachyonBattlePlayer = {
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
};

export interface TachyonBattleSpectator {
    isSpectator: true;
    isBot: false;
}

export type TachyonBot = {
    playerId: number;
    teamId: number;
    color: string;
    bonus: number;
    inGame: boolean;
} & {
    isSpectator: false;
    isBot: true;
    ownerId: number;
    aiShortName: string;
    name: string;
    aiOptions: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^(.*)$".
         */
        [k: string]: unknown;
    };
    faction: string;
};

export type TachyonBattleStatus =
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

export interface TachyonUser {
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
}

export interface TachyonPrivateUser {
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
}

export interface TachyonRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface TachyonBattle {
    battleId: number;
    hostId: number;
    engine: string;
    game: string;
    map: string;
    startPosType: 0 | 1 | 2;
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
    startTime: number | null;
    ip: string | null;
    port: number | null;
    scriptPassword: string | null;
    modOptions: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^(.*)$".
         */
        [k: string]: unknown;
    };
    bots: ({
        playerId: number;
        teamId: number;
        color: string;
        bonus: number;
        inGame: boolean;
    } & {
        isSpectator: false;
        isBot: true;
        ownerId: number;
        aiShortName: string;
        name: string;
        aiOptions: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: unknown;
        };
        faction: string;
    })[];
    users: {
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
    }[];
}

export type TachyonCustomBattle = {
    battleId: number;
    hostId: number;
    engine: string;
    game: string;
    map: string;
    startPosType: 0 | 1 | 2;
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
    startTime: number | null;
    ip: string | null;
    port: number | null;
    scriptPassword: string | null;
    modOptions: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^(.*)$".
         */
        [k: string]: unknown;
    };
    bots: ({
        playerId: number;
        teamId: number;
        color: string;
        bonus: number;
        inGame: boolean;
    } & {
        isSpectator: false;
        isBot: true;
        ownerId: number;
        aiShortName: string;
        name: string;
        aiOptions: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(.*)$".
             */
            [k: string]: unknown;
        };
        faction: string;
    })[];
    users: {
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
    }[];
} & {
    title: string;
    locked: boolean;
    passworded: boolean;
    bossIds: number[];
    joinQueueIds: number[];
    limits: {
        minTeamsize: number | null;
        maxTeamsize: number | null;
        minRating: number | null;
        maxRating: number | null;
    };
};

