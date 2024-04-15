// json-schema-faker.d.ts
declare module "json-schema-faker";

// these are just some copy pasted shims from the outputed index.d.ts file, intended for generated-helpers.ts to make it easier to dev them

declare type AutohostSlaveResponse =
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
          reason: "invalid_command";
      };
declare type AutohostUnslaveResponse =
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
          reason: "invalid_command";
      };
declare type GameLaunchResponse =
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
declare type LobbyCloseResponse =
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
declare type LobbyCreateResponse =
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
declare type LobbyJoinResponse =
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
declare type LobbyJoinedResponse =
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
                  avatarUrl: string;
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
          reason: "invalid_command";
      };
declare type LobbyLeaveResponse =
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
declare type LobbyLeftResponse =
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
declare type LobbyListResponse =
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
                      avatarUrl: string;
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
          reason: "invalid_command";
      };
declare type LobbyReceiveMessageResponse =
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
          reason: "invalid_command";
      };
declare type LobbySendMessageResponse =
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
declare type LobbySubscribeResponse =
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
          reason: "invalid_command";
      };
declare type LobbyUnsubscribeResponse =
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
          reason: "invalid_command";
      };
declare type LobbyUpdatedResponse =
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
                      avatarUrl: string;
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
          reason: "invalid_command";
      };
declare type MatchmakingCancelResponse =
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
declare type MatchmakingFoundResponse =
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
declare type MatchmakingListResponse =
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
declare type MatchmakingLostResponse =
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
declare type MatchmakingQueueResponse =
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
declare type MatchmakingQueueUpdateResponse =
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
          reason: "invalid_command";
      };
declare type MatchmakingReadyResponse =
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
declare type MatchmakingReadyUpdateResponse =
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
declare type SystemConnectedResponse =
    | {
          messageId: string;
          commandId: "system/connected/response";
          status: "success";
          data: {
              userId: string;
              username: string;
              displayName: string;
              avatarUrl: string;
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
          reason: "invalid_command";
      };
declare type SystemDisconnectResponse =
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
          reason: "invalid_command";
      };
declare type SystemServerStatsResponse =
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
declare type UserSubscribeResponse =
    | {
          messageId: string;
          commandId: "user/subscribe/response";
          status: "success";
          data: {
              users: {
                  userId: string;
                  username: string;
                  displayName: string;
                  avatarUrl: string;
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
          reason: "invalid_command";
      };
declare type UserUnsubscribeResponse =
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
          reason: "invalid_command";
      };
declare type UserUpdatedResponse =
    | {
          messageId: string;
          commandId: "user/updated/response";
          status: "success";
          data: {
              users: {
                  userId?: string;
                  username?: string;
                  displayName?: string;
                  avatarUrl?: string;
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
          reason: "invalid_command";
      };

declare interface Tachyon {
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
declare interface AutohostSlaveRequest {
    messageId: string;
    commandId: "autohost/slave/request";
    data: {
        maxBattles: number;
    };
}
declare interface AutohostUnslaveRequest {
    messageId: string;
    commandId: "autohost/unslave/request";
}
declare interface LobbyCloseRequest {
    messageId: string;
    commandId: "lobby/close/request";
}
declare interface LobbyCreateRequest {
    messageId: string;
    commandId: "lobby/create/request";
    data: {
        title: string;
        private: boolean;
        region: string;
        maxPlayers: number;
    };
}
declare interface LobbyJoinRequest {
    messageId: string;
    commandId: "lobby/join/request";
    data: {
        lobbyId: string;
        password?: string;
    };
}
declare interface LobbyLeaveRequest {
    messageId: string;
    commandId: "lobby/leave/request";
}
declare interface LobbyListRequest {
    messageId: string;
    commandId: "lobby/list/request";
}
declare interface LobbySendMessageRequest {
    messageId: string;
    commandId: "lobby/sendMessage/request";
    data: {
        message: string;
    };
}
declare interface LobbySubscribeRequest {
    messageId: string;
    commandId: "lobby/subscribe/request";
    data: {
        battleIds: string[];
    };
}
declare interface LobbyUnsubscribeRequest {
    messageId: string;
    commandId: "lobby/unsubscribe/request";
    data: {
        battleIds?: string[];
    };
}
declare interface MatchmakingCancelRequest {
    messageId: string;
    commandId: "matchmaking/cancel/request";
}
declare interface MatchmakingListRequest {
    messageId: string;
    commandId: "matchmaking/list/request";
}
declare interface MatchmakingQueueRequest {
    messageId: string;
    commandId: "matchmaking/queue/request";
    data: {
        /**
         * @minItems 1
         */
        queues: [string, ...string[]];
    };
}
declare interface MatchmakingReadyRequest {
    messageId: string;
    commandId: "matchmaking/ready/request";
}
declare interface SystemDisconnectRequest {
    messageId: string;
    commandId: "system/disconnect/request";
    data?: {
        reason: string;
    };
}
declare interface SystemServerStatsRequest {
    messageId: string;
    commandId: "system/serverStats/request";
}
declare interface UserSubscribeRequest {
    messageId: string;
    commandId: "user/subscribe/request";
    data: {
        userIds: string[];
    };
}
declare interface UserUnsubscribeRequest {
    messageId: string;
    commandId: "user/unsubscribe/request";
    data: {
        userIds: string[];
    };
}
declare type TachyonUnixTime = number | null;

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

declare type TachyonUserStatus = "offline" | "menu" | "playing" | "lobby";

declare interface TachyonUser {
    userId: string;
    username: string;
    displayName: string;
    avatarUrl: string;
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

declare interface TachyonPrivateUser {
    userId: string;
    username: string;
    displayName: string;
    avatarUrl: string;
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

declare interface TachyonRect {
    x: number;
    y: number;
    width: number;
    height: number;
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
        avatarUrl: string;
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
        avatarUrl: string;
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

declare interface TachyonAutohostStatus {
    gameStartTime: number | null;
}
