import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    description: "Should reset the password for the connected user and send it to the associated email address",
    request: {},
    response: [
        {
            status: "success",
        },
    ],
});
