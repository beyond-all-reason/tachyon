import { defineEndpoint } from "@/generator-helpers.js";
import { battle } from "@/schema/types";

export default defineEndpoint({
    description:
        "Sent when the client successfully joins a lobby. Can also be sent at any time by the server to forcibly make the client join a lobby.",
    response: [
        {
            status: "success",
            data: battle,
        },
    ],
});
