import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description:
        "Ask the server to send updates about lobby list. Idempotent, subscribing multiple time has no effect.",
    request: {},
    response: [
        {
            status: "success",
        },
    ],
});
