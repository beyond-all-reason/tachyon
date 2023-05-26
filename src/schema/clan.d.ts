import { DefineRequest, DefineServiceSchema, DefineSuccessResponse } from "../helpers";

export type ClanService = DefineServiceSchema<{
    getClans: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    getClan: {
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
    rejectInvite: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
}>;
