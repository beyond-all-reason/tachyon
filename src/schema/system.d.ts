import { DefineServiceSchema } from "../helpers";

export type SystemService = DefineServiceSchema<{
    serverEvent: {
        response: { status: "success" };
    };
    error: {
        response: { status: "success" };
    };
}>;
