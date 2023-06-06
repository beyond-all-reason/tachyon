import { DefineServiceSchema, EmptyObject } from "../helpers";

export type TelemetryService = DefineServiceSchema<{
    property: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    event: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
}>;
