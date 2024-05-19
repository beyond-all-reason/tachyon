// json-schema-faker.d.ts
declare module "json-schema-faker";

// these are just some copy pasted shims from the outputed index.d.ts file, intended for generated-helpers.ts to make it easier to dev them

declare const tachyonMeta: {
    readonly version: "1.6.4";
    readonly schema: {
        readonly server: {
            readonly request: {
                readonly send: readonly ["autohost/launch"];
                readonly receive: readonly [
                    "autohost/slave",
                    "autohost/unslave",
                    "lobby/close",
                    "lobby/create",
                    "lobby/join",
                    "lobby/leave",
                    "lobby/list",
                    "lobby/sendMessage",
                    "lobby/subscribe",
                    "lobby/unsubscribe",
                    "matchmaking/cancel",
                    "matchmaking/declined",
                    "matchmaking/list",
                    "matchmaking/queue",
                    "matchmaking/ready",
                    "system/disconnect",
                    "system/serverStats",
                    "user/subscribe",
                    "user/unsubscribe",
                ];
            };
            readonly response: {
                readonly send: readonly [
                    "autohost/slave",
                    "autohost/unslave",
                    "lobby/close",
                    "lobby/create",
                    "lobby/join",
                    "lobby/leave",
                    "lobby/list",
                    "lobby/sendMessage",
                    "lobby/subscribe",
                    "lobby/unsubscribe",
                    "matchmaking/cancel",
                    "matchmaking/declined",
                    "matchmaking/list",
                    "matchmaking/queue",
                    "matchmaking/ready",
                    "system/disconnect",
                    "system/serverStats",
                    "user/subscribe",
                    "user/unsubscribe",
                ];
                readonly receive: readonly ["autohost/launch"];
            };
            readonly event: {
                readonly send: readonly [
                    "autohost/connected",
                    "game/launch",
                    "lobby/joined",
                    "lobby/left",
                    "lobby/receiveMessage",
                    "lobby/updated",
                    "matchmaking/found",
                    "matchmaking/foundUpdate",
                    "matchmaking/lost",
                    "matchmaking/queueUpdate",
                    "matchmaking/readyUpdate",
                    "system/connected",
                    "user/updated",
                ];
                readonly receive: readonly [];
            };
        };
        readonly user: {
            readonly request: {
                readonly send: readonly [
                    "lobby/close",
                    "lobby/create",
                    "lobby/join",
                    "lobby/leave",
                    "lobby/list",
                    "lobby/sendMessage",
                    "lobby/subscribe",
                    "lobby/unsubscribe",
                    "matchmaking/cancel",
                    "matchmaking/declined",
                    "matchmaking/list",
                    "matchmaking/queue",
                    "matchmaking/ready",
                    "system/disconnect",
                    "system/serverStats",
                    "user/subscribe",
                    "user/unsubscribe",
                ];
                readonly receive: readonly [];
            };
            readonly response: {
                readonly send: readonly [];
                readonly receive: readonly [
                    "lobby/close",
                    "lobby/create",
                    "lobby/join",
                    "lobby/leave",
                    "lobby/list",
                    "lobby/sendMessage",
                    "lobby/subscribe",
                    "lobby/unsubscribe",
                    "matchmaking/cancel",
                    "matchmaking/declined",
                    "matchmaking/list",
                    "matchmaking/queue",
                    "matchmaking/ready",
                    "system/disconnect",
                    "system/serverStats",
                    "user/subscribe",
                    "user/unsubscribe",
                ];
            };
            readonly event: {
                readonly send: readonly [];
                readonly receive: readonly [
                    "game/launch",
                    "lobby/joined",
                    "lobby/left",
                    "lobby/receiveMessage",
                    "lobby/updated",
                    "matchmaking/found",
                    "matchmaking/foundUpdate",
                    "matchmaking/lost",
                    "matchmaking/queueUpdate",
                    "matchmaking/readyUpdate",
                    "system/connected",
                    "user/updated",
                ];
            };
        };
        readonly autohost: {
            readonly request: {
                readonly send: readonly ["autohost/slave", "autohost/unslave"];
                readonly receive: readonly ["autohost/launch"];
            };
            readonly response: {
                readonly send: readonly ["autohost/launch"];
                readonly receive: readonly ["autohost/slave", "autohost/unslave"];
            };
            readonly event: {
                readonly send: readonly [];
                readonly receive: readonly ["autohost/connected"];
            };
        };
    };
};

declare type TachyonCommand =
    | AutohostConnectedEvent
    | AutohostLaunchRequest
    | AutohostLaunchResponse
    | AutohostSlaveRequest
    | AutohostSlaveResponse
    | AutohostUnslaveRequest
    | AutohostUnslaveResponse
    | GameLaunchEvent
    | LobbyCloseRequest
    | LobbyCloseResponse
    | LobbyCreateRequest
    | LobbyCreateResponse
    | LobbyJoinRequest
    | LobbyJoinResponse
    | LobbyJoinedEvent
    | LobbyLeaveRequest
    | LobbyLeaveResponse
    | LobbyLeftEvent
    | LobbyListRequest
    | LobbyListResponse
    | LobbyReceiveMessageEvent
    | LobbySendMessageRequest
    | LobbySendMessageResponse
    | LobbySubscribeRequest
    | LobbySubscribeResponse
    | LobbyUnsubscribeRequest
    | LobbyUnsubscribeResponse
    | LobbyUpdatedEvent
    | MatchmakingCancelRequest
    | MatchmakingCancelResponse
    | MatchmakingDeclinedRequest
    | MatchmakingDeclinedResponse
    | MatchmakingFoundEvent
    | MatchmakingFoundUpdateEvent
    | MatchmakingListRequest
    | MatchmakingListResponse
    | MatchmakingLostEvent
    | MatchmakingQueueRequest
    | MatchmakingQueueResponse
    | MatchmakingQueueUpdateEvent
    | MatchmakingReadyRequest
    | MatchmakingReadyResponse
    | MatchmakingReadyUpdateEvent
    | SystemConnectedEvent
    | SystemDisconnectRequest
    | SystemDisconnectResponse
    | SystemServerStatsRequest
    | SystemServerStatsResponse
    | UserSubscribeRequest
    | UserSubscribeResponse
    | UserUnsubscribeRequest
    | UserUnsubscribeResponse
    | UserUpdatedEvent;
declare type AutohostLaunchResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/launch";
          status: "success";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/launch";
          status: "failed";
          reason: "invalid_script";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/launch";
          status: "failed";
          reason: "server_already_running";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/launch";
          status: "failed";
          reason: "server_failed_to_start";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/launch";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/launch";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/launch";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/launch";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type AutohostSlaveResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/slave";
          status: "success";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/slave";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/slave";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/slave";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/slave";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type AutohostUnslaveResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/unslave";
          status: "success";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/unslave";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/unslave";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/unslave";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "autohost/unslave";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type LobbyCloseResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/close";
          status: "success";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/close";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/close";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/close";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/close";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type LobbyCreateResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/create";
          status: "success";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/create";
          status: "failed";
          reason: "no_hosts_available";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/create";
          status: "failed";
          reason: "invalid_region";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/create";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/create";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/create";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/create";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type LobbyJoinResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/join";
          status: "success";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/join";
          status: "failed";
          reason: "locked";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/join";
          status: "failed";
          reason: "requires_password";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/join";
          status: "failed";
          reason: "invalid_password";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/join";
          status: "failed";
          reason: "max_participants_reached";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/join";
          status: "failed";
          reason: "rank_too_low";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/join";
          status: "failed";
          reason: "rank_too_high";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/join";
          status: "failed";
          reason: "banned";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/join";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/join";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/join";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/join";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type LobbyLeaveResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/leave";
          status: "success";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/leave";
          status: "failed";
          reason: "no_lobby";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/leave";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/leave";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/leave";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/leave";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type LobbyListResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/list";
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
                      scopes: string[];
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
          type: "response";
          messageId: string;
          commandId: "lobby/list";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/list";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/list";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/list";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type LobbySendMessageResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/sendMessage";
          status: "success";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/sendMessage";
          status: "failed";
          reason: "not_in_lobby";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/sendMessage";
          status: "failed";
          reason: "muted";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/sendMessage";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/sendMessage";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/sendMessage";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/sendMessage";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type LobbySubscribeResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/subscribe";
          status: "success";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/subscribe";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/subscribe";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/subscribe";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/subscribe";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type LobbyUnsubscribeResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/unsubscribe";
          status: "success";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/unsubscribe";
          status: "failed";
          reason: "cannot_unsub_own_battle";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/unsubscribe";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/unsubscribe";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/unsubscribe";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "lobby/unsubscribe";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type MatchmakingCancelResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/cancel";
          status: "success";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/cancel";
          status: "failed";
          reason: "not_queued";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/cancel";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/cancel";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/cancel";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/cancel";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type MatchmakingDeclinedResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/declined";
          status: "success";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/declined";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/declined";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/declined";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/declined";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type MatchmakingListResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/list";
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
          type: "response";
          messageId: string;
          commandId: "matchmaking/list";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/list";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/list";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/list";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type MatchmakingQueueResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/queue";
          status: "success";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/queue";
          status: "failed";
          reason: "invalid_queue_specified";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/queue";
          status: "failed";
          reason: "already_queued";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/queue";
          status: "failed";
          reason: "already_ingame";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/queue";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/queue";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/queue";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/queue";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type MatchmakingReadyResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/ready";
          status: "success";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/ready";
          status: "failed";
          reason: "no_match";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/ready";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/ready";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/ready";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "matchmaking/ready";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type SystemDisconnectResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "system/disconnect";
          status: "success";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "system/disconnect";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "system/disconnect";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "system/disconnect";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "system/disconnect";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type SystemServerStatsResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "system/serverStats";
          status: "success";
          data: {
              userCount: number;
          };
      }
    | {
          type: "response";
          messageId: string;
          commandId: "system/serverStats";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "system/serverStats";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "system/serverStats";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "system/serverStats";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type UserSubscribeResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "user/subscribe";
          status: "success";
          data: {
              users: {
                  userId: string;
                  username: string;
                  displayName: string;
                  avatarUrl: string | null;
                  clanId: string | null;
                  partyId: string | null;
                  scopes: string[];
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
          type: "response";
          messageId: string;
          commandId: "user/subscribe";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "user/subscribe";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "user/subscribe";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "user/subscribe";
          status: "failed";
          reason: "command_unimplemented";
      };
declare type UserUnsubscribeResponse =
    | {
          type: "response";
          messageId: string;
          commandId: "user/unsubscribe";
          status: "success";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "user/unsubscribe";
          status: "failed";
          reason: "cannot_unsub_own_user";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "user/unsubscribe";
          status: "failed";
          reason: "internal_error";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "user/unsubscribe";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "user/unsubscribe";
          status: "failed";
          reason: "invalid_request";
      }
    | {
          type: "response";
          messageId: string;
          commandId: "user/unsubscribe";
          status: "failed";
          reason: "command_unimplemented";
      };

declare interface AutohostConnectedEvent {
    type: "event";
    messageId: string;
    commandId: "autohost/connected";
}
declare interface AutohostLaunchRequest {
    type: "request";
    messageId: string;
    commandId: "autohost/launch";
    data: {
        script: string;
    };
}
declare interface AutohostSlaveRequest {
    type: "request";
    messageId: string;
    commandId: "autohost/slave";
    data: {
        maxBattles: number;
    };
}
declare interface AutohostUnslaveRequest {
    type: "request";
    messageId: string;
    commandId: "autohost/unslave";
}
declare interface GameLaunchEvent {
    type: "event";
    messageId: string;
    commandId: "game/launch";
    data: {
        script: string;
    };
}
declare interface LobbyCloseRequest {
    type: "request";
    messageId: string;
    commandId: "lobby/close";
}
declare interface LobbyCreateRequest {
    type: "request";
    messageId: string;
    commandId: "lobby/create";
    data: {
        title: string;
        private: boolean;
        region: string;
        maxPlayers: number;
    };
}
declare interface LobbyJoinRequest {
    type: "request";
    messageId: string;
    commandId: "lobby/join";
    data: {
        lobbyId: string;
        password?: string;
    };
}
declare interface LobbyJoinedEvent {
    type: "event";
    messageId: string;
    commandId: "lobby/joined";
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
            scopes: string[];
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
declare interface LobbyLeaveRequest {
    type: "request";
    messageId: string;
    commandId: "lobby/leave";
}
declare interface LobbyLeftEvent {
    type: "event";
    messageId: string;
    commandId: "lobby/left";
}
declare interface LobbyListRequest {
    type: "request";
    messageId: string;
    commandId: "lobby/list";
}
declare interface LobbyReceiveMessageEvent {
    type: "event";
    messageId: string;
    commandId: "lobby/receiveMessage";
    data: {
        userId: string;
        message: string;
    };
}
declare interface LobbySendMessageRequest {
    type: "request";
    messageId: string;
    commandId: "lobby/sendMessage";
    data: {
        message: string;
    };
}
declare interface LobbySubscribeRequest {
    type: "request";
    messageId: string;
    commandId: "lobby/subscribe";
    data: {
        battleIds: string[];
    };
}
declare interface LobbyUnsubscribeRequest {
    type: "request";
    messageId: string;
    commandId: "lobby/unsubscribe";
    data: {
        battleIds?: string[];
    };
}
declare interface LobbyUpdatedEvent {
    type: "event";
    messageId: string;
    commandId: "lobby/updated";
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
                scopes: string[];
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
declare interface MatchmakingCancelRequest {
    type: "request";
    messageId: string;
    commandId: "matchmaking/cancel";
}
declare interface MatchmakingDeclinedRequest {
    type: "request";
    messageId: string;
    commandId: "matchmaking/declined";
}
declare interface MatchmakingFoundEvent {
    type: "event";
    messageId: string;
    commandId: "matchmaking/found";
    data: {
        queueId: string;
        timeoutMs: number;
    };
}
declare interface MatchmakingFoundUpdateEvent {
    type: "event";
    messageId: string;
    commandId: "matchmaking/foundUpdate";
    data: {
        readyCount: number;
    };
}
declare interface MatchmakingListRequest {
    type: "request";
    messageId: string;
    commandId: "matchmaking/list";
}
declare interface MatchmakingLostEvent {
    type: "event";
    messageId: string;
    commandId: "matchmaking/lost";
}
declare interface MatchmakingQueueRequest {
    type: "request";
    messageId: string;
    commandId: "matchmaking/queue";
    data: {
        /**
         * @minItems 1
         */
        queues: [string, ...string[]];
    };
}
declare interface MatchmakingQueueUpdateEvent {
    type: "event";
    messageId: string;
    commandId: "matchmaking/queueUpdate";
    data: {
        playersQueued: string;
    };
}
declare interface MatchmakingReadyRequest {
    type: "request";
    messageId: string;
    commandId: "matchmaking/ready";
}
declare interface MatchmakingReadyUpdateEvent {
    type: "event";
    messageId: string;
    commandId: "matchmaking/readyUpdate";
    data: {
        readyMax: number;
        readyCurrent: number;
    };
}
declare interface SystemConnectedEvent {
    type: "event";
    messageId: string;
    commandId: "system/connected";
    data: {
        userId: string;
        username: string;
        displayName: string;
        avatarUrl: string | null;
        clanId: string | null;
        partyId: string | null;
        scopes: string[];
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
declare interface SystemDisconnectRequest {
    type: "request";
    messageId: string;
    commandId: "system/disconnect";
    data?: {
        reason: string;
    };
}
declare interface SystemServerStatsRequest {
    type: "request";
    messageId: string;
    commandId: "system/serverStats";
}
declare interface UserSubscribeRequest {
    type: "request";
    messageId: string;
    commandId: "user/subscribe";
    data: {
        userIds: string[];
    };
}
declare interface UserUnsubscribeRequest {
    type: "request";
    messageId: string;
    commandId: "user/unsubscribe";
    data: {
        userIds: string[];
    };
}
declare interface UserUpdatedEvent {
    type: "event";
    messageId: string;
    commandId: "user/updated";
    data: {
        users: {
            userId?: string;
            username?: string;
            displayName?: string;
            avatarUrl?: string | null;
            clanId?: string | null;
            partyId?: string | null;
            scopes?: string[];
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
declare interface TachyonAutohostStatus {
    gameStartTime: number | null;
}

declare interface TachyonBattle {
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
        scopes: string[];
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

declare interface TachyonBattleContender {
    playerId: number;
    teamId: number;
    color: string;
    bonus: number;
    inGame: boolean;
}

declare type TachyonBattlePlayer = {
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

declare interface TachyonBattleSpectator {
    isSpectator: true;
    isBot: false;
}

declare type TachyonBattleStatus =
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

declare interface TachyonBot {
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

declare type TachyonCustomBattle = {
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
        scopes: string[];
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

declare interface TachyonMatchmakingPlaylist {
    id: string;
    name: string;
    numOfTeams: number;
    teamSize: number;
    ranked: boolean;
}

declare interface TachyonPrivateUser {
    userId: string;
    username: string;
    displayName: string;
    avatarUrl: string | null;
    clanId: string | null;
    partyId: string | null;
    scopes: string[];
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

declare interface TachyonRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

declare type TachyonUnixTime = number | null;

declare interface TachyonUser {
    userId: string;
    username: string;
    displayName: string;
    avatarUrl: string | null;
    clanId: string | null;
    partyId: string | null;
    scopes: string[];
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

declare type TachyonUserStatus = "offline" | "menu" | "playing" | "lobby";
