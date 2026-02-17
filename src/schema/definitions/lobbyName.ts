import { Type } from "@sinclair/typebox";

export const lobbyName = Type.String({
    $id: "lobbyName",
    maxLength: 70,
    description: "Name of a lobby",
});
