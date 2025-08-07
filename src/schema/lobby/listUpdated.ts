import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { Nullable } from "@/typebox-utils";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Sent by the server whenever a lobby is added, removed or modified",
    event: {
        data: Type.Object({
            updates: Type.Array(
                Type.Union([
                    Type.Object(
                        {
                            type: Type.Const("removed"),
                            id: Type.String(),
                        },
                        { description: "this lobby is no more" }
                    ),
                    Type.Object({
                        type: Type.Const("added"),
                        overview: Type.Ref("lobbyOverview"),
                    }),
                    Type.Object(
                        {
                            type: Type.Const("setList"),
                            overviews: Type.Array(Type.Ref("lobbyOverview")),
                        },
                        { description: "reset the list of lobby" }
                    ),
                    Type.Object({
                        type: Type.Const("updated"),
                        overview: Type.Object({
                            id: Type.String(),
                            name: Type.Optional(Type.String()),
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
                        }),
                    }),
                ])
            ),
        }),
    },
});
