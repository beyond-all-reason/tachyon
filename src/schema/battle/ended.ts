import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Sent to all players and spectators involved in a battle when it ends.",
    event: {
        data: Type.Object({
            battleId: Type.String({ format: "uuid" }),
            players: Type.Array(
                Type.Object({
                    userId: Type.Ref("userId"),
                    allyTeamId: Type.String(),
                })
            ),
            spectators: Type.Array(Type.Ref("userId")),
            winningAllyTeamIds: Type.Optional(
                Type.Array(Type.String(), {
                    description: "absent or empty array indicates a draw",
                })
            ),
        }),
    },
});
