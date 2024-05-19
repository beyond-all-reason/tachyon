import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Leave the current lobby.",
    request: {},
    response: [
        {
            status: "success",
        },
        { status: "failed", reason: "no_lobby" },
    ],
});
