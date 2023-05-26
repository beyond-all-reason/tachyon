import { DefineServiceSchema, DefineSuccessResponse } from "../helpers";

export type InitService = DefineServiceSchema<{
    init: {
        response: DefineSuccessResponse<{
            tachyonVersion: string;
        }>;
    };
}>;
