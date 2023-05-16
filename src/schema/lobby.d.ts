import { DefineServiceSchema, Request, SuccessResponse } from "../helpers";

export type LobbyService = DefineServiceSchema<{
    getLobbies: {
        request: Request;
        response: SuccessResponse;
    };
    get: {
        request: Request;
        response: SuccessResponse;
    };
    join: {
        request: Request;
        response: SuccessResponse;
    };
    leave: {
        request: Request;
        response: SuccessResponse;
    };
    updateStatus: {
        request: Request;
        response: SuccessResponse;
    };
    updated: {
        request: Request;
        response: SuccessResponse;
    };
    joined: {
        request: Request;
        response: SuccessResponse;
    };
    addUserClient: {
        request: Request;
        response: SuccessResponse;
    };
    removeUserClient: {
        request: Request;
        response: SuccessResponse;
    };
    botAdded: {
        request: Request;
        response: SuccessResponse;
    };
    botUpdated: {
        request: Request;
        response: SuccessResponse;
    };
    botRemoved: {
        request: Request;
        response: SuccessResponse;
    };
    opened: {
        request: Request;
        response: SuccessResponse;
    };
    closed: {
        request: Request;
        response: SuccessResponse;
    };
}>;
