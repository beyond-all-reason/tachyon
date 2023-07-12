import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    description:
        "Sent when the server terminates the WebSocket connection with the client for any reason. The only time the `success` response should be sent is if the client asked to be disconnected using a [disconnect](#disconnect) request.",
    response: [
        {
            status: "success",
        },
    ],
});
