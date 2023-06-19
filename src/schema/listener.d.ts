import { DefineServiceSchema, EmptyRequest } from "../helpers";

export type ListenerService = DefineServiceSchema<{
    subscribe: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    unsubscribe: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    getSubscriptions: {
        request: EmptyRequest;
        response: { status: "success" };
    };
}>;
