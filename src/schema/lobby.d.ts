import { DefineServiceSchema, EmptyRequest } from "../helpers";

export type LobbyService = DefineServiceSchema<{
    getLobbies: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    get: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    join: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    leave: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    updateStatus: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    updated: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    joined: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    addUserClient: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    removeUserClient: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    botAdded: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    botUpdated: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    botRemoved: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    opened: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    closed: {
        request: EmptyRequest;
        response: { status: "success" };
    };
}>;
