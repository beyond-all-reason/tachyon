import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    description: "Cancel queueing for matchmaking.",
    request: {},
    response: [{ status: "success" }, { status: "failed", reason: "not_queued" }],
});
