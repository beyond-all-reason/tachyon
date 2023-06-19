import { DefineServiceSchema, EmptyRequest } from "../helpers";

export type MatchmakingService = DefineServiceSchema<{
    getQueues: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    getJoinedQueues: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    getQueue: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    joinQueue: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    leaveQueue: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    leaveAllQueues: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    matchReady: {
        response: { status: "success" };
    };
    accept: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    decline: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    matchCancelled: {
        response: { status: "success" };
    };
}>;
