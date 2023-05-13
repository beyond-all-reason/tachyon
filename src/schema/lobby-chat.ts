import { DefineServiceSchema, Request, SuccessResponse } from "../helpers";

export type LobbyChatService = DefineServiceSchema<{
    say: {
        request: Request;
        response: SuccessResponse;
    };
    announce: {
        request: Request;
        response: SuccessResponse;
    };
    said: {
        response: SuccessResponse;
    };
    announced: {
        response: SuccessResponse;
    };
}>;
