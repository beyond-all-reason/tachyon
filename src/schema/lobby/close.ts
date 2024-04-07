import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    description: "Close an existing lobby.",
    request: {},
    response: [
        {
            status: "success",
        },
    ],
});
