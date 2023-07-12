import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    description:
        "Ask the server to terminate the connection. The server will send a [disconnected](#disconnected) response.",
    request: {},
});
