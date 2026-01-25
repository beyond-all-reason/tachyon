import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Leave your clan.",
    request: {
        data: {},
    },
    response: [{ status: "success" }],
});
