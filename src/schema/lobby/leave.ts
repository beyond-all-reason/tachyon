import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Leave the lobby, also unsubscribe from any update",
    request: {},
    response: [
        { status: "failed", reason: "not_in_lobby" },
        {
            status: "success",
        },
    ],
});
