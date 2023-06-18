import { DefineServiceSchema, EmptyObject } from "../helpers";

export type ModerationService = DefineServiceSchema<{
    getReportingConfigs: {
        request: EmptyObject;
        response: { status: "success" };
    };
    reportUserClient: {
        request: EmptyObject;
        response: { status: "success" };
    };
}>;
