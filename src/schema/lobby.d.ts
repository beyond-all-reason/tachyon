import { DefineServiceSchema, EmptyObject } from "../helpers";

export type LobbyService = DefineServiceSchema<{
    getLobbies: {
        request: EmptyObject;
        response: { status: "success" };
    };
    get: {
        request: EmptyObject;
        response: { status: "success" };
    };
    join: {
        request: EmptyObject;
        response: { status: "success" };
    };
    leave: {
        request: EmptyObject;
        response: { status: "success" };
    };
    updateStatus: {
        request: EmptyObject;
        response: { status: "success" };
    };
    updated: {
        request: EmptyObject;
        response: { status: "success" };
    };
    joined: {
        request: EmptyObject;
        response: { status: "success" };
    };
    addUserClient: {
        request: EmptyObject;
        response: { status: "success" };
    };
    removeUserClient: {
        request: EmptyObject;
        response: { status: "success" };
    };
    botAdded: {
        request: EmptyObject;
        response: { status: "success" };
    };
    botUpdated: {
        request: EmptyObject;
        response: { status: "success" };
    };
    botRemoved: {
        request: EmptyObject;
        response: { status: "success" };
    };
    opened: {
        request: EmptyObject;
        response: { status: "success" };
    };
    closed: {
        request: EmptyObject;
        response: { status: "success" };
    };
}>;
