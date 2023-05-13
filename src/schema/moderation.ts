import { DefineServiceSchema, Request, SuccessResponse } from "../helpers";

export type ModerationService = DefineServiceSchema<{
    getReportingConfigs: {
        request: Request;
        response: SuccessResponse;
    };
    reportUserClient: {
        request: Request;
        response: SuccessResponse;
    };
}>;
