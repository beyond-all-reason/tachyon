import { DefineRequest, DefineServiceSchema, DefineSuccessResponse } from "../helpers";

export type TelemetryService = DefineServiceSchema<{
    property: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    event: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
}>;
