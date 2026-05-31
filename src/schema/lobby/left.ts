import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "Sent by the server when the player is removed from the lobby. Can be kicked/ban or the lobby crashed",
    event: {
        data: Type.Object({
            id: Type.String({ description: "lobby id" }),
            reason: Type.String(),
            bannedUntil: Type.Optional(
                Type.Ref("unixTime", {
                    description:
                        "if this field is set, it means the client has been banned from this lobby until that timestamp.",
                })
            ),
        }),
    },
});
