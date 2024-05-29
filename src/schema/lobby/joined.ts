import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";
import { battle } from "@/schema/definitions";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Sent when the client successfully joins a lobby. Can also be sent at any time by the server to forcibly make the client join a lobby.",
    event: {
        data: Type.Ref(battle),
    },
});
