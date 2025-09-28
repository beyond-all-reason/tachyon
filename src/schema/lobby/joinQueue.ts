import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description:
        "Joins the waiting queue to play. The server will automatically put the user in the first suitable ally team when the time comes.",
    request: {},
    response: [{ status: "failed", reason: "not_in_lobby" }, { status: "success" }],
});
