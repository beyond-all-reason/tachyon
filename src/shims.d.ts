// these are just some copy pasted shims from the outputed index.d.ts file, intended for generated-helpers.ts to make it easier to dev them

declare interface Tachyon {
    [key: string]: {
        [key: string]: { request: unknown; response: unknown } | { response: unknown };
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
}
