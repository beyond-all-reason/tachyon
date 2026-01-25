import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "Server may send this event at any point when the user is queuing to indicate that the user has been booted out the matchmaking system.",
    event: {
        data: Type.Object({
            reason: Type.Enum([
                "intentional",
                "server_error",
                "party_user_left",
                "ready_timeout",
                "version_changed",
            ]),
        }),
    },
});
