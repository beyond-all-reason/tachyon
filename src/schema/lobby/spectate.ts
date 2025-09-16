import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description:
        "Move the client to the spectator queue. If already in spectator queue, has no effect (but still succeed).",
    request: {},
    response: [{ status: "failed", reason: "not_in_lobby" }, { status: "success" }],
});
