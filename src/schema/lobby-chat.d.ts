import { DefineServiceSchema, EmptyObject } from "../helpers";

export type LobbyChatService = DefineServiceSchema<{
    say: {
        request: { message: string };
        response: { success: EmptyObject };
    };
    announce: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    said: {
        response: { success: EmptyObject };
    };
    announced: {
        response: { success: EmptyObject };
    };
}>;
