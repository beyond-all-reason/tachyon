import { DefineServiceSchema, EmptyObject } from "../helpers";

export type LobbyHostService = DefineServiceSchema<{
    create: {
        request: EmptyObject;
        response: { status: "success" };
    };
    close: {
        request: EmptyObject;
        response: { status: "success" };
    };
    joinRequest: {
        // Server messages first, how do we define request/response for this?
        request: EmptyObject;
        response: { status: "success" };
    };

    // In lobby actions
    updatePlayerStatus: {
        request: EmptyObject;
        response: { status: "success" };
    };
    addBot: {
        request: EmptyObject;
        response: { status: "success" };
    };
    updateBot: {
        request: EmptyObject;
        response: { status: "success" };
    };
    removeBot: {
        request: EmptyObject;
        response: { status: "success" };
    };

    // Battle stuff
    startBattle: {
        request: EmptyObject;
        response: { status: "success" };
    };
    endBattle: {
        request: EmptyObject;
        response: { status: "success" };
    };

    // Server updates
    updatedStatus: {
        response: { status: "success" };
    };
}>;
