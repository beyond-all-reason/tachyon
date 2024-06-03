import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { allyTeam } from "@/schema/definitions/allyTeam";
import { spectator } from "@/schema/definitions/spectator";
import { startPosType } from "@/schema/definitions/startPosType";

export default defineEndpoint({
    source: "server",
    target: "autohost",
    description: "Tell the autohost client to launch the game server (spring-dedicated.exe or spring-headless.exe) with the given script data.",
    request: {
        data: Type.Object({
            battleId: Type.String(),
            engineVersion: Type.String({ pattern: "^[0-9a-zA-Z .+-]+$" }),
            gameName: Type.String(),
            mapName: Type.String(),
            gameArchiveHash: Type.String({ pattern: "^[a-fA-F0-9]{128}$" }),
            mapArchiveHash: Type.String({ pattern: "^[a-fA-F0-9]{128}$" }),
            startDelay: Type.Integer(),
            startPosType: Type.Ref(startPosType),
            allyTeams: Type.Array(Type.Ref(allyTeam)),
            spectators: Type.Array(Type.Ref(spectator)),
            mapOptions: Type.Optional(Type.Record(Type.String(), Type.String())),
            gameOptions: Type.Optional(Type.Record(Type.String(), Type.String())),
            restrictions: Type.Optional(
                Type.Array(
                    Type.Object({
                        unitId: Type.String(),
                        limit: Type.Integer({ minimum: 0 }),
                    })
                )
            ),
        }),
    },
    response: [
        {
            status: "success",
        },
        {
            status: "failed",
            reason: "invalid_script",
        },
        {
            status: "failed",
            reason: "server_already_running",
        },
        {
            status: "failed",
            reason: "server_failed_to_start",
        },
    ],
});
