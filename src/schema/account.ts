import { UserClient } from "schema/types";

import { DefineServiceSchema, Request, SuccessResponse } from "../helpers";

export type AccountService = DefineServiceSchema<{
    whoAmI: {
        request: Request;
        response: SuccessResponse<{
            todo: string;
        }>;
    };
    updateAccount: {
        request: Request;
        response: SuccessResponse;
    };
    getUserClients: {
        request: Request<{ ids: number[] }>;
        response: SuccessResponse<{
            userClients: UserClient[];
        }>;
    };
    getFriends: {
        request: Request;
        response: SuccessResponse<{
            userClients: UserClient[];
        }>;
    };
    addFriend: {
        request: Request;
        response: SuccessResponse;
    };
    rescindFriendRequest: {
        request: Request;
        response: SuccessResponse;
    };
    acceptFriendRequest: {
        request: Request;
        response: SuccessResponse;
    };
    rejectFriendRequest: {
        request: Request;
        response: SuccessResponse;
    };
    removeFriend: {
        request: Request;
        response: SuccessResponse;
    };
    receivedFriendRequest: {
        response: SuccessResponse;
    };
}>;
