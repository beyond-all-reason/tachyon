import { DefineServiceSchema, EmptyObject } from "../helpers";

export type SystemService = DefineServiceSchema<{
    serverEvent: {
        response: { success: EmptyObject };
    };
    error: {
        response: { success: EmptyObject };
    };
}>;
