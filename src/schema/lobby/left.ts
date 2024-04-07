import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    description: "Sent when the server removes the client from a lobby.",
    response: [
        {
            status: "success",
        },
    ],
});
