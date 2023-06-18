import { DefineServiceSchema, EmptyObject } from "../helpers";

export type LobbyChatService = DefineServiceSchema<{
    say: {
        request: { message: string };
        response: { status: "success" };
    };
    announce: {
        request: EmptyObject;
        response: { status: "success" };
    };
    said: {
        response: { status: "success" };
    };
    announced: {
        response: { status: "success" };
    };
}>;
