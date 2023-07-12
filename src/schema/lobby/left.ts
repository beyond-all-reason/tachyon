import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    description: "Sent when the server removes the client from a lobby.",
    response: [
        {
            status: "success",
        },
    ],
});
