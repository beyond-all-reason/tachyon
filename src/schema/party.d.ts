import { DefineServiceSchema, EmptyObject } from "../helpers";

export type PartyService = DefineServiceSchema<{
    create: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    getParty: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    invite: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    rescindInvite: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    acceptInvite: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    declineInvite: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    kick: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    sendMessage: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    updated: {
        response: { success: EmptyObject };
    };
    seeMessage: {
        response: { success: EmptyObject };
    };
}>;
