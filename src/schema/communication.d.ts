import { DefineServiceSchema, EmptyObject } from "../helpers";

export type CommunicationService = DefineServiceSchema<{
    sendDirectMessage: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    receivedDirectMessage: {
        response: { success: EmptyObject };
    };
    getNotifications: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
}>;
