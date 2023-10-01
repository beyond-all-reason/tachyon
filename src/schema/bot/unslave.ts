import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    description: "Unregisters the client as slavable.",
    requiresRole: "autohost",
    request: {},
    response: [{ status: "success" }],
});
