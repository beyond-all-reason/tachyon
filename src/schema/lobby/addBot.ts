import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Add a bot to the specified ally team",
    request: {
        data: Type.Object({
            allyTeam: Type.String(),
            name: Type.Optional(
                Type.String({ maxLength: 20, description: "name to display in the lobby" })
            ),
            shortName: Type.String({
                maxLength: 20,
                description: "Short name of the bot. Used to uniquely identify which bot to run",
            }),
            version: Type.Optional(Type.String()),
            options: Type.Optional(Type.Record(Type.String(), Type.String())),
        }),
    },
    response: [
        { status: "failed", reason: "not_in_lobby" },
        { status: "failed", reason: "ally_team_full" },
        {
            status: "success",
            data: Type.Object({
                id: Type.String({ description: "The id the server generated for this bot" }),
            }),
        },
    ],
});
