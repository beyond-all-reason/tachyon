import { DefineServiceSchema, EmptyRequest } from "../helpers";

export type ClanService = DefineServiceSchema<{
    getClans: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    getClan: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    invite: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    rescindInvite: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    acceptInvite: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    rejectInvite: {
        request: EmptyRequest;
        response: { status: "success" };
    };
}>;
