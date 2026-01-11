import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { Nullable } from "@/typebox-utils";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Sent by the server whenever some lobbies are added, removed or modified.",
    event: {
        data: Type.Object({
            lobbies: Type.Record(
                Type.String(),
                Nullable(
                    Type.Object({
                        id: Type.String(),
                        name: Type.Optional(Type.Ref("lobbyName")),
                        playerCount: Type.Optional(Type.Integer()),
                        maxPlayerCount: Type.Optional(Type.Integer()),
                        mapName: Type.Optional(Type.String()),
                        engineVersion: Type.Optional(Type.String()),
                        gameVersion: Type.Optional(Type.String()),
                        currentBattle: Type.Optional(
                            Nullable(
                                Type.Object({
                                    startedAt: Type.Ref("unixTime"),
                                })
                            )
                        ),
                    })
                )
            ),
        }),
    },
});
