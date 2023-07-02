import { DefineServiceSchema, EmptyObject } from "../helpers";

export type LobbyService = DefineServiceSchema<{
    getLobbies: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    get: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    join: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    receivedJoinRequestResponse: {
        response: { success: EmptyObject };
    };
    leave: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    updateStatus: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    updated: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    joined: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    addUserClient: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    removeUserClient: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    botAdded: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    botUpdated: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    botRemoved: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    opened: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    closed: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
}>;
