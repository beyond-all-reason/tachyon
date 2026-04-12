import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { Nullable } from "@/typebox-utils.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Update some properties of the lobby the player is in.",
    request: {
        data: Type.Object({
            name: Type.Optional(Type.String({ description: "to rename the lobby" })),
            mapName: Type.Optional(Type.String()),
            allyTeamConfig: Type.Optional(Type.Ref("allyTeamConfig")),
            gameOptions: Type.Optional(
                Type.Record(
                    Type.String(),
                    Nullable(
                        Type.Object({
                            value: Type.String(),
                        })
                    ),
                    { description: "Set to null to remove a game option" }
                )
            ),
        }),
    },
    response: [{ status: "success" }],
});
