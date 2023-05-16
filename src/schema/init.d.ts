import { DefineServiceSchema, Request, SuccessResponse } from "../helpers";

export type InitService = DefineServiceSchema<{
    init: {
        response: SuccessResponse<{
            tachyonVersion: string;
        }>;
    };
    test: {
        request: Request<{
            name: string;
        }>;
    };
}>;
