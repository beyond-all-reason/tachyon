import { defineEndpoint } from "@/generator-helpers";

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
