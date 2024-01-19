import { defineEndpoint } from "@/generator-helpers";

export default defineEndpoint({
    description: "Close an existing lobby.",
    request: {},
    response: [
        {
            status: "success",
        },
    ],
});
