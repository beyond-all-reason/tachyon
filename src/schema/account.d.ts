import { DefineServiceSchema, EmptyRequest } from "../helpers";
import { UserClient } from "./types";

export type AccountService = DefineServiceSchema<{
    whoAmI: {
        request: EmptyRequest;
        response: { status: "success"; data: object };
    };
    updateAccount: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    getUserClients: {
        request: { ids: number[] };
        response: { status: "success"; data: { userClients: UserClient[] } };
    };
    getFriends: {
        request: EmptyRequest;
        response: { status: "success"; data: { userClients: UserClient[] } };
    };
    addFriend: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    rescindFriendRequest: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    acceptFriendRequest: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    rejectFriendRequest: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    removeFriend: {
        request: EmptyRequest;
        response: { status: "success" };
    };
    receivedFriendRequest: {
        response: { status: "success" };
    };
}>;
