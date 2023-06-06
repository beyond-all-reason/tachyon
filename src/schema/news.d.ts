import { DefineServiceSchema, EmptyObject } from "../helpers";

export type NewsService = DefineServiceSchema<{
    getNewsItems: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
}>;
