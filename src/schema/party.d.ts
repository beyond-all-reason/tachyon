import { DefineServiceSchema, EmptyObject } from "../helpers";

export type PartyService = DefineServiceSchema<{
    create: {
        request: EmptyObject;
        response: { status: "success" };
    };
    getParty: {
        request: EmptyObject;
        response: { status: "success" };
    };
    invite: {
        request: EmptyObject;
        response: { status: "success" };
    };
    rescindInvite: {
        request: EmptyObject;
        response: { status: "success" };
    };
    acceptInvite: {
        request: EmptyObject;
        response: { status: "success" };
    };
    declineInvite: {
        request: EmptyObject;
        response: { status: "success" };
    };
    kick: {
        request: EmptyObject;
        response: { status: "success" };
    };
    sendMessage: {
        request: EmptyObject;
        response: { status: "success" };
    };
    updated: {
        response: { status: "success" };
    };
    seeMessage: {
        response: { status: "success" };
    };
}>;
