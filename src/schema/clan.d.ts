import { DefineServiceSchema, EmptyObject } from "../helpers";

export type ClanService = DefineServiceSchema<{
    getClans: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    getClan: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    invite: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    rescindInvite: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    acceptInvite: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    rejectInvite: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
}>;
