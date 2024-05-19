import { defineEndpoint } from "@/generator-helpers.js";
import { privateUser } from "@/schema/types";

export default defineEndpoint({
    source: "server",
    target: "user",
    description: "Sent immediately by the server on connection.",
    event: {
        data: privateUser,
    },
});
