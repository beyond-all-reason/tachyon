import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Joins the given ally team in an empty team.",
    request: {
        data: Type.Object({
            allyTeam: Type.String(),
        }),
    },
    response: [
        { status: "failed", reason: "not_in_lobby" },
        { status: "failed", reason: "ally_team_full" },
        { status: "success" },
    ],
});
