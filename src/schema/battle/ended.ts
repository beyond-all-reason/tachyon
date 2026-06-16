import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Sent to all players and spectators involved in a battle when it ends.",
    event: {
        data: Type.Object({
            battleId: Type.Ref("battleId"),
            players: Type.Array(
                Type.Object({
                    userId: Type.Ref("userId"),
                    allyTeam: Type.String(),
                    team: Type.String(),
                    player: Type.String(),
                })
            ),
            spectators: Type.Array(
                Type.Object({
                    userId: Type.Ref("userId"),
                })
            ),
            winningAllyTeamIds: Type.Array(Type.String()),
        }),
    },
});
