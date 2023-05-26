import { DefineRequest, DefineServiceSchema, DefineSuccessResponse } from "../helpers";

export type PartyService = DefineServiceSchema<{
    create: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    getParty: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    invite: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    rescindInvite: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    acceptInvite: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    declineInvite: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    kick: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    sendMessage: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    updated: {
        response: DefineSuccessResponse;
    };
    seeMessage: {
        response: DefineSuccessResponse;
    };
}>;
