import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { unixTime } from "@/schema/definitions/unixTime";
import { userId } from "@/schema/definitions/userId";

export default defineEndpoint({
    source: "autohost",
    target: "server",
    description: "Inform the server of battle updates.",
    event: {
        data: Type.Object({
            battleId: Type.String({ format: "uuid" }),
            time: Type.Ref(unixTime),
            update: Type.Union([
                Type.Object(
                    {
                        type: Type.Const("start"),
                    },
                    {
                        description: "The battle has started.",
                        title: "StartUpdate",
                    }
                ),
                Type.Object(
                    {
                        type: Type.Const("finished"),
                        userId: Type.Ref(userId),
                        winningAllyTeams: Type.Array(Type.Integer(), { minItems: 1, description: "Ally team IDs" }),
                    },
                    {
                        description: "The battle finished, generated once per every single player reporting who won.",
                        title: "FinishedUpdate",
                    }
                ),
                Type.Object(
                    {
                        type: Type.Const("engine_message"),
                        message: Type.String(),
                    },
                    {
                        description: "A message from the engine, e.g. some ip is trying to connect.",
                        title: "EngineMessageUpdate",
                    }
                ),
                Type.Object(
                    {
                        type: Type.Const("engine_warning"),
                        message: Type.String(),
                    },
                    {
                        description: "A warning from the engine.",
                        title: "EngineWarningUpdate",
                    }
                ),
                Type.Object(
                    {
                        type: Type.Const("engine_quit"),
                    },
                    {
                        description: "The engine process for battle has quit cleanly, no more updates will be sent for this battle.",
                        title: "EngineQuitUpdate",
                    }
                ),
                Type.Object(
                    {
                        type: Type.Const("engine_crash"),
                    },
                    {
                        description: "The engine process for battle has crashed, no more updates will be sent for this battle.",
                        title: "EngineCrashUpdate",
                    }
                ),
                Type.Object(
                    {
                        type: Type.Const("player_joined"),
                        userId: Type.Ref(userId),
                        playerNumber: Type.Integer(),
                    },
                    {
                        description: "Player number in the game, can be useful for custom commands.",
                        title: "PlayerJoinedUpdate",
                    }
                ),
            ]),
        }),
    },
});
