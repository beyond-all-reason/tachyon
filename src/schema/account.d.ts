import { DefineServiceSchema, EmptyObject } from "../helpers";
import { UserClient } from "./types";

export type AccountService = DefineServiceSchema<{
    whoAmI: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    updateAccount: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    getUserClients: {
        request: { ids: number[] };
        response: { success: { userClients: UserClient[] } };
    };
    getFriends: {
        request: EmptyObject;
        response: { success: { userClients: UserClient[] } };
    };
    addFriend: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    rescindFriendRequest: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    acceptFriendRequest: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    rejectFriendRequest: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    removeFriend: {
        request: EmptyObject;
        response: { success: EmptyObject };
    };
    receivedFriendRequest: {
        response: { success: EmptyObject };
    };
}>;
