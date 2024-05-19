import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Close an existing lobby.",
    request: {},
    response: [
        {
            status: "success",
        },
    ],
});
