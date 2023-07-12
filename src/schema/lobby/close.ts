import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    description: "Close an existing lobby.",
    request: {},
    response: [
        {
            status: "success",
        },
    ],
});
