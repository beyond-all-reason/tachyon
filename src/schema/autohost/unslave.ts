import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "autohost",
    target: "server",
    description: "Unregisters the client as slavable.",
    scopes: ["autohost"],
    request: {},
    response: [{ status: "success" }],
});
