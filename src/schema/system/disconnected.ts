import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    description: "Sent when the server terminates the WebSocket connection with the client.",
    response: [
        {
            status: "success",
        },
    ],
});
