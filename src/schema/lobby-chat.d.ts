import { DefineServiceSchema, Request, SuccessResponse } from "../helpers";

export type LobbyChatService = DefineServiceSchema<{
    say: {
        request: Request<{
            message: string;
        }>;
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
