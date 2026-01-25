import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Sent by the server to give the client the full list of all lobbies",
    event: {
        data: Type.Object({
            lobbies: Type.Record(Type.String(), Type.Ref("lobbyOverview")),
        }),
    },
});
