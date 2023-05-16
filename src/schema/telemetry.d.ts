import { DefineServiceSchema, Request, SuccessResponse } from "../helpers";

export type TelemetryService = DefineServiceSchema<{
    property: {
        request: Request;
        response: SuccessResponse;
    };
    event: {
        request: Request;
        response: SuccessResponse;
    };
}>;
