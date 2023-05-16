import { DefineServiceSchema, SuccessResponse } from "../helpers";

export type SystemService = DefineServiceSchema<{
    serverEvent: {
        response: SuccessResponse;
    };
    error: {
        response: SuccessResponse;
    };
}>;
