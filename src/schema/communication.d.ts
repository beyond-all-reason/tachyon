import { DefineServiceSchema, EmptyRequest } from "../helpers";

export type CommunicationService = DefineServiceSchema<{
    sendDirectMessage: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    receivedDirectMessage: {
        response: { status: "success" };
    };
    getNotifications: {
        request: EmptyRequest;
        response: { status: "success" };
    };
}>;
