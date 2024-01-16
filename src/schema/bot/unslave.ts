import { defineEndpoint } from "@/generator-helpers";

export default defineEndpoint({
    description: "Unregisters the client as slavable.",
    requiresRole: "autohost",
    request: {},
    response: [{ status: "success" }],
});
