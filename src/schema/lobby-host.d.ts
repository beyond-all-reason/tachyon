import { DefineServiceSchema, EmptyRequest } from "../helpers";

export type LobbyHostService = DefineServiceSchema<{
    create: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    close: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    joinRequest: {
        // Server messages first, how do we define request/response for this?
        request: EmptyRequest;
        response: { status: "success" };
    };

    // In lobby actions
    updatePlayerStatus: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    addBot: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    updateBot: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    removeBot: {
        request: EmptyRequest;
        response: { status: "success" };
    };

    // Battle stuff
    startBattle: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    endBattle: {
        request: EmptyRequest;
        response: { status: "success" };
    };

    // Server updates
    updatedStatus: {
        response: { status: "success" };
    };
}>;
