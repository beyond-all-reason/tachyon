import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Sent when the server removes the client from a lobby.",
    event: {},
});
