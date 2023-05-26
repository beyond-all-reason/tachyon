import { DefineRequest, DefineServiceSchema, DefineSuccessResponse } from "../helpers";

export type LobbyChatService = DefineServiceSchema<{
    say: {
        request: DefineRequest<{ message: string }>;
        response: DefineSuccessResponse;
    };
    announce: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    said: {
        response: DefineSuccessResponse;
    };
    announced: {
        response: DefineSuccessResponse;
    };
}>;
