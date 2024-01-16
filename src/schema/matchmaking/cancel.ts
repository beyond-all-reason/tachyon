import { defineEndpoint } from "@/generator-helpers";

export default defineEndpoint({
    description:
        "Cancel queueing for matchmaking. Can also be sent during the ready phase to effectively decline the match.",
    request: {},
    response: [{ status: "success" }, { status: "failed", reason: "not_queued" }],
});
