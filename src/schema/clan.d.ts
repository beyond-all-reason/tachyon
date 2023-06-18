import { DefineServiceSchema, EmptyObject } from "../helpers";

export type ClanService = DefineServiceSchema<{
    getClans: {
        request: EmptyObject;
        response: { status: "success" };
    };
    getClan: {
        request: EmptyObject;
        response: { status: "success" };
    };
    invite: {
        request: EmptyObject;
        response: { status: "success" };
    };
    rescindInvite: {
        request: EmptyObject;
        response: { status: "success" };
    };
    acceptInvite: {
        request: EmptyObject;
        response: { status: "success" };
    };
    rejectInvite: {
        request: EmptyObject;
        response: { status: "success" };
    };
}>;
