import { DefineRequest, DefineServiceSchema, DefineSuccessResponse } from "../helpers";

export type MatchmakingService = DefineServiceSchema<{
    getQueues: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    getJoinedQueues: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    getQueue: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    joinQueue: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    leaveQueue: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    leaveAllQueues: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    matchReady: {
        response: DefineSuccessResponse;
    };
    accept: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    decline: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    matchCancelled: {
        response: DefineSuccessResponse;
    };
}>;
