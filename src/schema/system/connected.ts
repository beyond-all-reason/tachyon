import { defineEndpoint } from "@/generator-helpers.js";
import { privateUser } from "@/schema/types";

export default defineEndpoint({
    description: "Sent immediately by the server on connection.",
    response: [
        {
            status: "success",
            data: privateUser,
        },
    ],
});
