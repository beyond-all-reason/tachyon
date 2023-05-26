import { DefineServiceSchema, DefineSuccessResponse } from "../helpers";

export type SystemService = DefineServiceSchema<{
    serverEvent: {
        response: DefineSuccessResponse;
    };
    error: {
        response: DefineSuccessResponse;
    };
}>;
