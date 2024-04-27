import { EmptyObject, KeysOfUnion } from "type-fest";

declare const tachyonMeta: {
    readonly version: "1.5.5";
    readonly ids: {
        readonly autohost: {
            readonly slave: readonly ["request", "response"];
            readonly unslave: readonly ["request", "response"];
        };
        readonly game: {
            readonly launch: readonly ["response"];
        };
        readonly lobby: {
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
            readonly disconnect: readonly ["request", "response"];
            readonly serverStats: readonly ["request", "response"];
        };
        readonly user: {
            readonly subscribe: readonly ["request", "response"];
            readonly unsubscribe: readonly ["request", "response"];
            readonly updated: readonly ["response"];
        };
    };
};

type ServiceId = keyof Tachyon;
type EndpointId<S extends ServiceId> = keyof Tachyon[S];
type Command<S extends ServiceId, E extends EndpointId<S>> = Tachyon[S][E];
type RequestCommand<S extends ServiceId, E extends EndpointId<S>> = Command<S, E> extends {
    request: infer Request;
}
    ? Request
    : never;
type ResponseCommand<S extends ServiceId, E extends EndpointId<S>> = Command<S, E> extends {
    response: infer Response;
}
    ? Response
    : never;
type RequestEndpointId<S extends ServiceId> = {
    [E in EndpointId<S>]: "request" extends keyof Command<S, E> ? E : never;
}[EndpointId<S>];
type ResponseEndpointId<S extends ServiceId> = {
    [E in EndpointId<S>]: "response" extends keyof Command<S, E> ? E : never;
}[EndpointId<S>];
type ResponseOnlyEndpointId<S extends ServiceId> = {
    [E in EndpointId<S>]: Command<S, E> extends RequestCommand<S, E> ? never : E;
}[EndpointId<S>];
type RequestData<S extends ServiceId, E extends EndpointId<S>> = RequestCommand<S, E> extends {
    data: infer Data;
}
    ? Data
    : never;
type DistributiveOmit<T, K extends keyof T> = T extends T ? Omit<T, K> : never;
type ResponseData<S extends ServiceId, E extends EndpointId<S>> = ResponseCommand<S, E> extends {
    commandId: string;
    messageId: string;
}
    ? DistributiveOmit<ResponseCommand<S, E>, "commandId" | "messageId">
    : never;
type SuccessResponseData<S extends ServiceId, E extends EndpointId<S>> = ResponseCommand<S, E> & {
    status: "success";
} extends {
    data: infer Data;
}
    ? Data
    : never;
type EmptyRequestId<S extends ServiceId> = {
    [K in EndpointId<S>]: RequestData<S, K> extends EmptyObject ? K : never;
}[EndpointId<S>];
type DataRequestId<S extends ServiceId> = {
    [K in EndpointId<S>]: RequestData<S, K> extends EmptyObject ? never : K;
}[EndpointId<S>];
type RequestType = {
    [S in keyof Tachyon]: {
        [E in keyof Tachyon[S]]: Tachyon[S][E] extends {
            request: unknown;
        }
            ? Tachyon[S][E]["request"]
            : never;
    }[KeysOfUnion<Tachyon[S]>];
}[KeysOfUnion<Tachyon>];
type ResponseType = {
    [S in keyof Tachyon]: {
        [E in keyof Tachyon[S]]: Tachyon[S][E] extends {
            response: unknown;
        }
            ? Tachyon[S][E]["response"]
            : never;
    }[KeysOfUnion<Tachyon[S]>];
}[KeysOfUnion<Tachyon>];
type RequestCommandId = Pick<RequestType, "commandId">;
type ResponseCommandId = Pick<ResponseType, "commandId">;
type GenericRequestCommand = {
    commandId: string;
    messageId: string;
    data?: Record<string, unknown>;
};
type GenericResponseCommand = {
    commandId: string;
    messageId: string;
} & (
    | {
          status: "success";
          data?: Record<string, unknown>;
      }
    | {
          status: "failed";
          reason: string;
      }
);

export {
    Command,
    DataRequestId,
    EmptyRequestId,
    EndpointId,
    GenericRequestCommand,
    GenericResponseCommand,
    RequestCommand,
    RequestCommandId,
    RequestData,
    RequestEndpointId,
    RequestType,
    ResponseCommand,
    ResponseCommandId,
    ResponseData,
    ResponseEndpointId,
    ResponseOnlyEndpointId,
    ResponseType,
    ServiceId,
    SuccessResponseData,
    tachyonMeta,
};

export type AutohostSlaveResponse =
    | {
          messageId: string;
          commandId: "autohost/slave/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "autohost/slave/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "autohost/slave/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "autohost/slave/response";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "autohost/slave/response";
          status: "failed";
          reason: "command_unimplemented";
      };
export type AutohostUnslaveResponse =
    | {
          messageId: string;
          commandId: "autohost/unslave/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "autohost/unslave/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "autohost/unslave/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "autohost/unslave/response";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "autohost/unslave/response";
          status: "failed";
          reason: "command_unimplemented";
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "game/launch/response";
          status: "failed";
          reason: "command_unimplemented";
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "lobby/close/response";
          status: "failed";
          reason: "command_unimplemented";
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "lobby/create/response";
          status: "failed";
          reason: "command_unimplemented";
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "lobby/join/response";
          status: "failed";
          reason: "command_unimplemented";
      };
export type LobbyJoinedResponse =
    | {
          messageId: string;
          commandId: "lobby/joined/response";
          status: "success";
          data: {
              battleId: string;
              hostId: string;
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
              bots: {
                  playerId: number;
                  teamId: number;
                  color: string;
                  bonus: number;
                  inGame: boolean;
                  isSpectator: false;
                  isBot: true;
                  ownerId: string;
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
              }[];
              users: {
                  userId: string;
                  username: string;
                  displayName: string;
                  avatarUrl: string | null;
                  clanId: string | null;
                  partyId: string | null;
                  roles: string[];
                  countryCode?: string;
                  status: "offline" | "menu" | "playing" | "lobby";
                  battleStatus:
                      | ({
                            battleId: string;
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "lobby/joined/response";
          status: "failed";
          reason: "command_unimplemented";
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "lobby/leave/response";
          status: "failed";
          reason: "command_unimplemented";
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "lobby/left/response";
          status: "failed";
          reason: "command_unimplemented";
      };
export type LobbyListResponse =
    | {
          messageId: string;
          commandId: "lobby/list/response";
          status: "success";
          data: {
              battles: ({
                  battleId: string;
                  hostId: string;
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
                  bots: {
                      playerId: number;
                      teamId: number;
                      color: string;
                      bonus: number;
                      inGame: boolean;
                      isSpectator: false;
                      isBot: true;
                      ownerId: string;
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
                  }[];
                  users: {
                      userId: string;
                      username: string;
                      displayName: string;
                      avatarUrl: string | null;
                      clanId: string | null;
                      partyId: string | null;
                      roles: string[];
                      countryCode?: string;
                      status: "offline" | "menu" | "playing" | "lobby";
                      battleStatus:
                          | ({
                                battleId: string;
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
                  bossIds: string[];
                  joinQueueIds: string[];
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "lobby/list/response";
          status: "failed";
          reason: "command_unimplemented";
      };
export type LobbyReceiveMessageResponse =
    | {
          messageId: string;
          commandId: "lobby/receiveMessage/response";
          status: "success";
          data: {
              userId: string;
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "lobby/receiveMessage/response";
          status: "failed";
          reason: "command_unimplemented";
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "lobby/sendMessage/response";
          status: "failed";
          reason: "command_unimplemented";
      };
export type LobbySubscribeResponse =
    | {
          messageId: string;
          commandId: "lobby/subscribe/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "lobby/subscribe/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "lobby/subscribe/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "lobby/subscribe/response";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "lobby/subscribe/response";
          status: "failed";
          reason: "command_unimplemented";
      };
export type LobbyUnsubscribeResponse =
    | {
          messageId: string;
          commandId: "lobby/unsubscribe/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "lobby/unsubscribe/response";
          status: "failed";
          reason: "cannot_unsub_own_battle";
      }
    | {
          messageId: string;
          commandId: "lobby/unsubscribe/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "lobby/unsubscribe/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "lobby/unsubscribe/response";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "lobby/unsubscribe/response";
          status: "failed";
          reason: "command_unimplemented";
      };
export type LobbyUpdatedResponse =
    | {
          messageId: string;
          commandId: "lobby/updated/response";
          status: "success";
          data: {
              battles: ({
                  battleId?: string;
                  hostId?: string;
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
                  bots?: {
                      playerId: number;
                      teamId: number;
                      color: string;
                      bonus: number;
                      inGame: boolean;
                      isSpectator: false;
                      isBot: true;
                      ownerId: string;
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
                  }[];
                  users?: {
                      userId: string;
                      username: string;
                      displayName: string;
                      avatarUrl: string | null;
                      clanId: string | null;
                      partyId: string | null;
                      roles: string[];
                      countryCode?: string;
                      status: "offline" | "menu" | "playing" | "lobby";
                      battleStatus:
                          | ({
                                battleId: string;
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
                  bossIds?: string[];
                  joinQueueIds?: string[];
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "lobby/updated/response";
          status: "failed";
          reason: "command_unimplemented";
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "matchmaking/cancel/response";
          status: "failed";
          reason: "command_unimplemented";
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "matchmaking/found/response";
          status: "failed";
          reason: "command_unimplemented";
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
                  numOfTeams: number;
                  teamSize: number;
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "matchmaking/list/response";
          status: "failed";
          reason: "command_unimplemented";
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "matchmaking/lost/response";
          status: "failed";
          reason: "command_unimplemented";
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "matchmaking/queue/response";
          status: "failed";
          reason: "command_unimplemented";
      };
export type MatchmakingQueueUpdateResponse =
    | {
          messageId: string;
          commandId: "matchmaking/queueUpdate/response";
          status: "success";
          data: {
              playersQueued: string;
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "matchmaking/queueUpdate/response";
          status: "failed";
          reason: "command_unimplemented";
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "matchmaking/ready/response";
          status: "failed";
          reason: "command_unimplemented";
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "matchmaking/readyUpdate/response";
          status: "failed";
          reason: "command_unimplemented";
      };
export type SystemConnectedResponse =
    | {
          messageId: string;
          commandId: "system/connected/response";
          status: "success";
          data: {
              userId: string;
              username: string;
              displayName: string;
              avatarUrl: string | null;
              clanId: string | null;
              partyId: string | null;
              roles: string[];
              countryCode?: string;
              status: "offline" | "menu" | "playing" | "lobby";
              battleStatus:
                  | ({
                        battleId: string;
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
              friendIds: string[];
              outgoingFriendRequestIds: string[];
              incomingFriendRequestIds: string[];
              ignoreIds: string[];
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "system/connected/response";
          status: "failed";
          reason: "command_unimplemented";
      };
export type SystemDisconnectResponse =
    | {
          messageId: string;
          commandId: "system/disconnect/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "system/disconnect/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "system/disconnect/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "system/disconnect/response";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "system/disconnect/response";
          status: "failed";
          reason: "command_unimplemented";
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
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "system/serverStats/response";
          status: "failed";
          reason: "command_unimplemented";
      };
export type UserSubscribeResponse =
    | {
          messageId: string;
          commandId: "user/subscribe/response";
          status: "success";
          data: {
              users: {
                  userId: string;
                  username: string;
                  displayName: string;
                  avatarUrl: string | null;
                  clanId: string | null;
                  partyId: string | null;
                  roles: string[];
                  countryCode?: string;
                  status: "offline" | "menu" | "playing" | "lobby";
                  battleStatus:
                      | ({
                            battleId: string;
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
          commandId: "user/subscribe/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "user/subscribe/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "user/subscribe/response";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "user/subscribe/response";
          status: "failed";
          reason: "command_unimplemented";
      };
export type UserUnsubscribeResponse =
    | {
          messageId: string;
          commandId: "user/unsubscribe/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "user/unsubscribe/response";
          status: "failed";
          reason: "cannot_unsub_own_user";
      }
    | {
          messageId: string;
          commandId: "user/unsubscribe/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "user/unsubscribe/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "user/unsubscribe/response";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "user/unsubscribe/response";
          status: "failed";
          reason: "command_unimplemented";
      };
export type UserUpdatedResponse =
    | {
          messageId: string;
          commandId: "user/updated/response";
          status: "success";
          data: {
              users: {
                  userId?: string;
                  username?: string;
                  displayName?: string;
                  avatarUrl?: string | null;
                  clanId?: string | null;
                  partyId?: string | null;
                  roles?: string[];
                  countryCode?: string;
                  status?: "offline" | "menu" | "playing" | "lobby";
                  battleStatus?:
                      | ({
                            battleId: string;
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
                  friendIds?: string[];
                  outgoingFriendRequestIds?: string[];
                  incomingFriendRequestIds?: string[];
                  ignoreIds?: string[];
              }[];
          };
      }
    | {
          messageId: string;
          commandId: "user/updated/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "user/updated/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "user/updated/response";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          messageId: string;
          commandId: "user/updated/response";
          status: "failed";
          reason: "command_unimplemented";
      };

export interface Tachyon {
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
    game: {
        /**
         * When a client receives this response it should launch the game (spring.exe) with the start script.
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
         * These commands are split because the server may want to force the client to join a battle without them explicitly requesting it.
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
         * Subscribe to custom battle updates. By default, updates for the user's own battle will always be subscribed to. If successful, the Tachyon server should respond with full data about the subscribed battles, and then continue to send partial (stateful) updates via the [updated](#updated) response.
         */
        subscribe: {
            request: LobbySubscribeRequest;
            response: LobbySubscribeResponse;
        };
        /**
         * Unsubscribe from custom battle updates. If battleIds is passed only updates to those battles will be stopped, otherwise this will stop updates for all battles.
         */
        unsubscribe: {
            request: LobbyUnsubscribeRequest;
            response: LobbyUnsubscribeResponse;
        };
        /**
         * Server sends an array of partial battle objects whenever a subscribed battle changes in some way.
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
            response: SystemDisconnectResponse;
        };
        /**
         * Get server stats such as user count.
         */
        serverStats: {
            request: SystemServerStatsRequest;
            response: SystemServerStatsResponse;
        };
    };
    user: {
        /**
         * Subscribe to user updates. By default, updates for the client's own user will always be subscribed to. If successful, the Tachyon server should respond with full data about the subscribed users, and then continue to send partial (stateful) updates via the [updated](#updated) response.
         */
        subscribe: {
            request: UserSubscribeRequest;
            response: UserSubscribeResponse;
        };
        /**
         * Unsubscribe from user updates.
         */
        unsubscribe: {
            request: UserUnsubscribeRequest;
            response: UserUnsubscribeResponse;
        };
        /**
         * Sent by the server to inform the client when subscribed users get updated in some way. The root object of each array element in `users` are partial, meaning only the elements present have changed, and anything missing is assumed to be unchanged.
         */
        updated: {
            response: UserUpdatedResponse;
        };
    };
}
export interface AutohostSlaveRequest {
    messageId: string;
    commandId: "autohost/slave/request";
    data: {
        maxBattles: number;
    };
}
export interface AutohostUnslaveRequest {
    messageId: string;
    commandId: "autohost/unslave/request";
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
        lobbyId: string;
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
export interface LobbySubscribeRequest {
    messageId: string;
    commandId: "lobby/subscribe/request";
    data: {
        battleIds: string[];
    };
}
export interface LobbyUnsubscribeRequest {
    messageId: string;
    commandId: "lobby/unsubscribe/request";
    data: {
        battleIds?: string[];
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
    data?: {
        reason: string;
    };
}
export interface SystemServerStatsRequest {
    messageId: string;
    commandId: "system/serverStats/request";
}
export interface UserSubscribeRequest {
    messageId: string;
    commandId: "user/subscribe/request";
    data: {
        userIds: string[];
    };
}
export interface UserUnsubscribeRequest {
    messageId: string;
    commandId: "user/unsubscribe/request";
    data: {
        userIds: string[];
    };
}
export interface TachyonAutohostStatus {
    gameStartTime: number | null;
}

export interface TachyonBattle {
    battleId: string;
    hostId: string;
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
    bots: {
        playerId: number;
        teamId: number;
        color: string;
        bonus: number;
        inGame: boolean;
        isSpectator: false;
        isBot: true;
        ownerId: string;
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
    }[];
    users: {
        userId: string;
        username: string;
        displayName: string;
        avatarUrl: string | null;
        clanId: string | null;
        partyId: string | null;
        roles: string[];
        countryCode?: string;
        status: "offline" | "menu" | "playing" | "lobby";
        battleStatus:
            | ({
                  battleId: string;
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

export type TachyonBattleStatus =
    | ({
          battleId: string;
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

export interface TachyonBot {
    playerId: number;
    teamId: number;
    color: string;
    bonus: number;
    inGame: boolean;
    isSpectator: false;
    isBot: true;
    ownerId: string;
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
}

export type TachyonCustomBattle = {
    battleId: string;
    hostId: string;
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
    bots: {
        playerId: number;
        teamId: number;
        color: string;
        bonus: number;
        inGame: boolean;
        isSpectator: false;
        isBot: true;
        ownerId: string;
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
    }[];
    users: {
        userId: string;
        username: string;
        displayName: string;
        avatarUrl: string | null;
        clanId: string | null;
        partyId: string | null;
        roles: string[];
        countryCode?: string;
        status: "offline" | "menu" | "playing" | "lobby";
        battleStatus:
            | ({
                  battleId: string;
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
    bossIds: string[];
    joinQueueIds: string[];
    limits: {
        minTeamsize: number | null;
        maxTeamsize: number | null;
        minRating: number | null;
        maxRating: number | null;
    };
};

export interface TachyonMatchmakingPlaylist {
    id: string;
    name: string;
    numOfTeams: number;
    teamSize: number;
    ranked: boolean;
}

export interface TachyonPrivateUser {
    userId: string;
    username: string;
    displayName: string;
    avatarUrl: string | null;
    clanId: string | null;
    partyId: string | null;
    roles: string[];
    countryCode?: string;
    status: "offline" | "menu" | "playing" | "lobby";
    battleStatus:
        | ({
              battleId: string;
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
    friendIds: string[];
    outgoingFriendRequestIds: string[];
    incomingFriendRequestIds: string[];
    ignoreIds: string[];
}

export interface TachyonRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

export type TachyonUnixTime = number | null;

export interface TachyonUser {
    userId: string;
    username: string;
    displayName: string;
    avatarUrl: string | null;
    clanId: string | null;
    partyId: string | null;
    roles: string[];
    countryCode?: string;
    status: "offline" | "menu" | "playing" | "lobby";
    battleStatus:
        | ({
              battleId: string;
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

export type TachyonUserStatus = "offline" | "menu" | "playing" | "lobby";
