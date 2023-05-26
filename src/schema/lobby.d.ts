import { DefineRequest, DefineServiceSchema, DefineSuccessResponse } from "../helpers";

export type LobbyService = DefineServiceSchema<{
    getLobbies: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    get: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    join: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    leave: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    updateStatus: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    updated: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    joined: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    addUserClient: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    removeUserClient: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    botAdded: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    botUpdated: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    botRemoved: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    opened: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    closed: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
}>;
