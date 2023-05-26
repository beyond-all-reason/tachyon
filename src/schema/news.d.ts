import { DefineRequest, DefineServiceSchema, DefineSuccessResponse } from "../helpers";

export type NewsService = DefineServiceSchema<{
    getNewsItems: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
}>;
