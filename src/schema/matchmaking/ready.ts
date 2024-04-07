import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    description:
        "Clients should send this when they are ready to proceed with the found match. If not sent within 10s of the [found](#found) response then queue should be cancelled.",
    request: {},
    response: [{ status: "success" }, { status: "failed", reason: "no_match" }],
});
