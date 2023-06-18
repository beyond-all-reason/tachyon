import { DefineServiceSchema, EmptyObject } from "../helpers";

export type TelemetryService = DefineServiceSchema<{
    property: {
        request: EmptyObject;
        response: { status: "success" };
    };
    event: {
        request: EmptyObject;
        response: { status: "success" };
    };
}>;
