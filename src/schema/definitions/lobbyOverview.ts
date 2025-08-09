import { Type } from "@sinclair/typebox";

export const lobbyOverview = Type.Object(
    {
        id: Type.String(),
        name: Type.String(),
        playerCount: Type.Integer(),
        maxPlayerCount: Type.Integer(),
        mapName: Type.String(),
        engineVersion: Type.String(),
        gameVersion: Type.String(),
    },
    { description: "Simplified view of a lobby for list display purposes.", $id: "lobbyOverview" }
);
