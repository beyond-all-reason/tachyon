import { DefineServiceSchema, Request, SuccessResponse } from "../helpers";

export type ListenerService = DefineServiceSchema<{
    subscribe: {
        request: Request;
        response: SuccessResponse;
    };
    unsubscribe: {
        request: Request;
        response: SuccessResponse;
    };
    getSubscriptions: {
        request: Request;
        response: SuccessResponse;
    };
}>;
