import { DefineServiceSchema, EmptyObject } from "../helpers";

export type MatchmakingService = DefineServiceSchema<{
    getQueues: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    getJoinedQueues: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    getQueue: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    joinQueue: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    leaveQueue: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    leaveAllQueues: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    matchReady: {
        response: { success: EmptyObject };
    };
    accept: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    decline: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    matchCancelled: {
        response: { success: EmptyObject };
    };
}>;
