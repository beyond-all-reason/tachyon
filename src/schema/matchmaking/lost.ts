import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    description: "Sent when a found match gets disbanded because a client failed to ready up.",
    response: [
        {
            status: "success",
        },
    ],
});
