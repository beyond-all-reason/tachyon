import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "Sent by the server when the player is removed from the lobby. Can be kicked/ban or the lobby crashed",
    event: {
        data: Type.Object({
            id: Type.String(),
            reason: Type.String(),
        }),
    },
});
