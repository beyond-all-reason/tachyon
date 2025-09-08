import { Type } from "@sinclair/typebox";

import { Nullable } from "@/typebox-utils";

export const lobbyOverview = Type.Object(
    {
        id: Type.String(),
        name: Type.String(),
        playerCount: Type.Integer(),
        maxPlayerCount: Type.Integer(),
        mapName: Type.String(),
        engineVersion: Type.String(),
        gameVersion: Type.String(),
        currentBattle: Nullable(
            Type.Object({
                startedAt: Type.Ref("unixTime"),
            })
        ),
    },
    { description: "Simplified view of a lobby for list display purposes.", $id: "lobbyOverview" }
);
