import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { Nullable } from "@/typebox-utils";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Change a bot properties. Some properties like ID and allyTeam can't be changed.",
    request: {
        data: Type.Object({
            id: Type.String(),
            name: Type.Optional(
                Type.String({ description: "name to display in the lobby", maxLength: 20 })
            ),
            shortName: Type.Optional(
                Type.String({
                    description:
                        "short name of the bot. Used to uniquely identify which bot to run",
                })
            ),
            version: Type.Optional(Nullable(Type.String())),
            options: Type.Optional(Type.Record(Type.String(), Nullable(Type.String()))),
        }),
    },
    response: [
        { status: "failed", reason: "not_in_lobby" },
        { status: "failed", reason: "invalid_bot" },
        { status: "success" },
    ],
});
