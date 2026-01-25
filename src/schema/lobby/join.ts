import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description:
        "Join a lobby. On success, get the lobby state and will receive updated events as long as player is in lobby.",
    request: {
        data: Type.Object({
            id: Type.String(),
        }),
    },
    response: [
        { status: "failed", reason: "lobby_full" },
        {
            status: "success",
            data: Type.Ref("lobbyDetails"),
        },
    ],
});
