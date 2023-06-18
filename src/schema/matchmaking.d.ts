import { DefineServiceSchema, EmptyObject } from "../helpers";

export type MatchmakingService = DefineServiceSchema<{
    getQueues: {
        request: EmptyObject;
        response: { status: "success" };
    };
    getJoinedQueues: {
        request: EmptyObject;
        response: { status: "success" };
    };
    getQueue: {
        request: EmptyObject;
        response: { status: "success" };
    };
    joinQueue: {
        request: EmptyObject;
        response: { status: "success" };
    };
    leaveQueue: {
        request: EmptyObject;
        response: { status: "success" };
    };
    leaveAllQueues: {
        request: EmptyObject;
        response: { status: "success" };
    };
    matchReady: {
        response: { status: "success" };
    };
    accept: {
        request: EmptyObject;
        response: { status: "success" };
    };
    decline: {
        request: EmptyObject;
        response: { status: "success" };
    };
    matchCancelled: {
        response: { status: "success" };
    };
}>;
