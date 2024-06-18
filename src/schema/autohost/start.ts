import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { allyTeam } from "@/schema/definitions/allyTeam";
import { player } from "@/schema/definitions/player";
import { startPosType } from "@/schema/definitions/startPosType";

export default defineEndpoint({
    source: "server",
    target: "autohost",
    description:
        "Tell the autohost client to launch the game server (spring-dedicated.exe or spring-headless.exe) with the given script data.",
    request: {
        data: Type.Object({
            battleId: Type.String({ format: "uuid" }),
            engineVersion: Type.String({ pattern: "^[0-9a-zA-Z .+-]+$" }),
            gameName: Type.String(),
            mapName: Type.String(),
            gameArchiveHash: Type.Optional(Type.String({ pattern: "^[a-fA-F0-9]{128}$" })),
            mapArchiveHash: Type.Optional(Type.String({ pattern: "^[a-fA-F0-9]{128}$" })),
            startDelay: Type.Optional(Type.Integer()),
            startPosType: Type.Ref(startPosType),
            allyTeams: Type.Array(Type.Ref(allyTeam), { minItems: 1 }),
            spectators: Type.Optional(Type.Array(Type.Ref(player))),
            mapOptions: Type.Optional(Type.Record(Type.String(), Type.String())),
            gameOptions: Type.Optional(Type.Record(Type.String(), Type.String())),
            restrictions: Type.Optional(
                Type.Record(Type.String(), Type.Integer({ minimum: 0 }), {
                    description:
                        "Mapping from unitDefId to the maximum number of units of that type that can be built.",
                })
            ),
            luamsgRegexp: Type.Optional(
                Type.String({
                    format: "regex",
                    description:
                        "When set, battle will generate updates for luamsgs matching this regexp. No updates will be generated if this is not set.",
                })
            ),
        }),
    },
    response: [
        {
            status: "success",
            data: Type.Object({
                ips: Type.Array(
                    Type.Union([Type.String({ format: "ipv4" }), Type.String({ format: "ipv6" })])
                ),
                port: Type.Integer({ minimum: 1024, maximum: 65535 }),
            }),
        },
        {
            status: "failed",
            reason: "battle_already_exists",
        },
        {
            status: "failed",
            reason: "engine_version_not_available",
        },
    ],
});
