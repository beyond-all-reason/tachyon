import { DefineServiceSchema, EmptyObject } from "../helpers";

export type ListenerService = DefineServiceSchema<{
    subscribe: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    unsubscribe: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    getSubscriptions: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
}>;
