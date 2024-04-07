import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    description: "Leave the current lobby.",
    request: {},
    response: [
        {
            status: "success",
        },
        { status: "failed", reason: "no_lobby" },
    ],
});
