import { DefineRequest, DefineServiceSchema, DefineSuccessResponse } from "../helpers";

export type LobbyHostService = DefineServiceSchema<{
    create: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    close: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    joinRequest: {
        // Server messages first, how do we define request/response for this?
        request: DefineRequest;
        response: DefineSuccessResponse;
    };

    // In lobby actions
    updatePlayerStatus: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    addBot: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    updateBot: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    removeBot: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };

    // Battle stuff
    startBattle: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    endBattle: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };

    // Server updates
    updatedStatus: {
        response: DefineSuccessResponse;
    };
}>;
