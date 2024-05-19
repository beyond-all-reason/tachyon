import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "autohost",
    description: "Sent to autohosts on connection.",
    event: {
        data: Type.Object({}),
    },
});
