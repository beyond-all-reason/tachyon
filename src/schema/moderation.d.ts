import { DefineRequest, DefineServiceSchema, DefineSuccessResponse } from "../helpers";

export type ModerationService = DefineServiceSchema<{
    getReportingConfigs: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    reportUserClient: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
}>;
