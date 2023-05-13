import { DefineServiceSchema, Request, SuccessResponse } from "../helpers";

export type CommunicationService = DefineServiceSchema<{
    sendDirectMessage: {
        request: Request;
        response: SuccessResponse;
    };
    receivedDirectMessage: {
        response: SuccessResponse;
    };
    getNotifications: {
        request: Request;
        response: SuccessResponse;
    };
}>;
