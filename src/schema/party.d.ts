import { DefineServiceSchema, Request, SuccessResponse } from "../helpers";

export type PartyService = DefineServiceSchema<{
    create: {
        request: Request;
        response: SuccessResponse;
    };
    getParty: {
        request: Request;
        response: SuccessResponse;
    };
    invite: {
        request: Request;
        response: SuccessResponse;
    };
    rescindInvite: {
        request: Request;
        response: SuccessResponse;
    };
    acceptInvite: {
        request: Request;
        response: SuccessResponse;
    };
    declineInvite: {
        request: Request;
        response: SuccessResponse;
    };
    kick: {
        request: Request;
        response: SuccessResponse;
    };
    sendMessage: {
        request: Request;
        response: SuccessResponse;
    };
    updated: {
        response: SuccessResponse;
    };
    seeMessage: {
        response: SuccessResponse;
    };
}>;
