import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Sent when a found match gets disbanded because a client failed to ready up.",
    event: {},
});
