import { DefineServiceSchema, EmptyRequest } from "../helpers";

export type NewsService = DefineServiceSchema<{
    getNewsItems: {
        request: EmptyRequest;
        response: { status: "success" };
    };
}>;
