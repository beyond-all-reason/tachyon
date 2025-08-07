import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description:
        "Ask the server to stop sending updates about lobby list. Idempotent, if not subscribed, will still succeed.",
    request: {},
    response: [
        {
            status: "success",
        },
    ],
});
