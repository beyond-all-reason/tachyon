import { DefineRequest, DefineServiceSchema, DefineSuccessResponse } from "../helpers";

export type ListenerService = DefineServiceSchema<{
    subscribe: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    unsubscribe: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    getSubscriptions: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
}>;
