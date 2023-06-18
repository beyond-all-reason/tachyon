import { DefineServiceSchema, EmptyObject } from "../helpers";
import { UserClient } from "./types";

export type AccountService = DefineServiceSchema<{
    whoAmI: {
        request: EmptyObject;
        response: { status: "success"; data: object };
    };
    updateAccount: {
        request: EmptyObject;
        response: { status: "success" };
    };
    getUserClients: {
        request: { ids: number[] };
        response: { status: "success"; data: { userClients: UserClient[] } };
    };
    getFriends: {
        request: EmptyObject;
        response: { status: "success"; data: { userClients: UserClient[] } };
    };
    addFriend: {
        request: EmptyObject;
        response: { status: "success" };
    };
    rescindFriendRequest: {
        request: EmptyObject;
        response: { status: "success" };
    };
    acceptFriendRequest: {
        request: EmptyObject;
        response: { status: "success" };
    };
    rejectFriendRequest: {
        request: EmptyObject;
        response: { status: "success" };
    };
    removeFriend: {
        request: EmptyObject;
        response: { status: "success" };
    };
    receivedFriendRequest: {
        response: { status: "success" };
    };
}>;
