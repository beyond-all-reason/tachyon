import { DefineRequest, DefineServiceSchema, DefineSuccessResponse } from "../helpers";

export type CommunicationService = DefineServiceSchema<{
    sendDirectMessage: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    receivedDirectMessage: {
        response: DefineSuccessResponse;
    };
    getNotifications: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
}>;
