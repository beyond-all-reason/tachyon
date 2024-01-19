import { defineEndpoint } from "@/generator-helpers";

export default defineEndpoint({
    description: "Sent when the server removes the client from a lobby.",
    response: [
        {
            status: "success",
        },
    ],
});
