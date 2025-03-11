import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Leave the party",
    request: {},
    // no failed/not_in_party status. Calling this request while not in a
    // party is a no-op
    response: [{ status: "success" }],
});
