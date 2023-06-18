import { DefineServiceSchema, EmptyObject } from "../helpers";

export type ListenerService = DefineServiceSchema<{
    subscribe: {
        request: EmptyObject;
        response: { status: "success" };
    };
    unsubscribe: {
        request: EmptyObject;
        response: { status: "success" };
    };
    getSubscriptions: {
        request: EmptyObject;
        response: { status: "success" };
    };
}>;
