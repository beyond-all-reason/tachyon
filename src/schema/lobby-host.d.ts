import { DefineServiceSchema, EmptyObject } from "../helpers";

export type LobbyHostService = DefineServiceSchema<{
    create: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    close: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };

    // In lobby actions
    updatePlayerStatus: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    addBot: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    updateBot: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    removeBot: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };

    // Battle stuff
    startBattle: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    endBattle: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };

    // Server updates
    updatedStatus: {
        response: { success: EmptyObject };
    };
    joinRequest: {
        // A user requests to join the lobby
        response: { success: EmptyObject };
    };
    respondToJoinRequest: {
        // Us accepting/declining the user wanting to join
        request: EmptyObject;
        response: { success: EmptyObject };
    };
}>;
