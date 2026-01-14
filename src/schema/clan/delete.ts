import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Delete your clan.",
    request: {},
    response: [{ status: "success" }],
});
