import { DefineServiceSchema, EmptyRequest } from "../helpers";

export type TelemetryService = DefineServiceSchema<{
    property: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    event: {
        request: EmptyRequest;
        response: { status: "success" };
    };
}>;
