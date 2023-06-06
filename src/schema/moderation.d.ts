import { DefineServiceSchema, EmptyObject } from "../helpers";

export type ModerationService = DefineServiceSchema<{
    getReportingConfigs: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    reportUserClient: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
}>;
