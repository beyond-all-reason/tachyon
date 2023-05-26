import { DefineRequest, DefineServiceSchema, DefineSuccessResponse } from "../helpers";
import { UserClient } from "./types";

export type AccountService = DefineServiceSchema<{
    whoAmI: {
        request: DefineRequest;
        response: DefineSuccessResponse
    };
    updateAccount: {
        request: DefineRequest;
        response: DefineSuccessResponse
    };
    getUserClients: {
        request: DefineRequest<{ ids: number[] }>;
        response: DefineSuccessResponse<{ userClients: UserClient[] }>;
    };
    getFriends: {
        request: DefineRequest;
        response: DefineSuccessResponse<{ userClients: UserClient[]; }>
    };
    addFriend: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    rescindFriendRequest: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    acceptFriendRequest: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    rejectFriendRequest: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    removeFriend: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    receivedFriendRequest: {
        response: DefineSuccessResponse;
    };
}>;
