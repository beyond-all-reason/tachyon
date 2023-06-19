import { DefineServiceSchema, EmptyRequest } from "../helpers";

export type PartyService = DefineServiceSchema<{
    create: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    getParty: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    invite: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    rescindInvite: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    acceptInvite: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    declineInvite: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    kick: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    sendMessage: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    updated: {
        response: { status: "success" };
    };
    seeMessage: {
        response: { status: "success" };
    };
}>;
