import { DefineServiceSchema, Request, SuccessResponse } from "../helpers";

export type MatchmakingService = DefineServiceSchema<{
    getQueues: {
        request: Request;
        response: SuccessResponse;
    };
    getJoinedQueues: {
        request: Request;
        response: SuccessResponse;
    };
    getQueue: {
        request: Request;
        response: SuccessResponse;
    };
    joinQueue: {
        request: Request;
        response: SuccessResponse;
    };
    leaveQueue: {
        request: Request;
        response: SuccessResponse;
    };
    leaveAllQueues: {
        request: Request;
        response: SuccessResponse;
    };
    matchReady: {
        response: SuccessResponse;
    };
    accept: {
        request: Request;
        response: SuccessResponse;
    };
    decline: {
        request: Request;
        response: SuccessResponse;
    };
    matchCancelled: {
        response: SuccessResponse;
    };
}>;
