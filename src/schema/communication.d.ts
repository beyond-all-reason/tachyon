import { DefineServiceSchema, EmptyObject } from "../helpers";

export type CommunicationService = DefineServiceSchema<{
    sendDirectMessage: {
        request: EmptyObject;
        response: { status: "success" };
    };
    receivedDirectMessage: {
        response: { status: "success" };
    };
    getNotifications: {
        request: EmptyObject;
        response: { status: "success" };
    };
}>;
