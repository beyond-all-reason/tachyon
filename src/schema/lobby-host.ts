import { DefineServiceSchema, Request, SuccessResponse } from "../helpers";

export type LobbyHostService = DefineServiceSchema<{
    create: {
        request: Request;
        response: SuccessResponse;
    };
    close: {
        request: Request;
        response: SuccessResponse;
    };
    joinRequest: {
        // Server messages first, how do we define request/response for this?
        request: Request;
        response: SuccessResponse;
    };

    // In lobby actions
    updatePlayerStatus: {
        request: Request;
        response: SuccessResponse;
    };
    addBot: {
        request: Request;
        response: SuccessResponse;
    };
    updateBot: {
        request: Request;
        response: SuccessResponse;
    };
    removeBot: {
        request: Request;
        response: SuccessResponse;
    };

    // Battle stuff
    startBattle: {
        request: Request;
        response: SuccessResponse;
    };
    endBattle: {
        request: Request;
        response: SuccessResponse;
    };

    // Server updates
    updatedStatus: {
        response: SuccessResponse;
    };
}>;
