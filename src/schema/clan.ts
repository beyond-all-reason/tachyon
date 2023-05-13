import { DefineServiceSchema, Request, SuccessResponse } from "../helpers";

export type ClanService = DefineServiceSchema<{
    getClans: {
        request: Request;
        response: SuccessResponse;
    };
    getClan: {
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
    rejectInvite: {
        request: Request;
        response: SuccessResponse;
    };
}>;
