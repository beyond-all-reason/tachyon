import { DefineServiceSchema, EmptyRequest } from "../helpers";

export type ModerationService = DefineServiceSchema<{
    getReportingConfigs: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    reportUserClient: {
        request: EmptyRequest;
        response: { status: "success" };
    };
}>;
