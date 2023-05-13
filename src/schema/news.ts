import { DefineServiceSchema, Request, SuccessResponse } from "../helpers";

export type NewsService = DefineServiceSchema<{
    getNewsItems: {
        request: Request;
        response: SuccessResponse;
    };
}>;
