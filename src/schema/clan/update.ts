import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Update your clan.",
    request: {
        data: Type.Object({ clan: Type.Ref("clan") }),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "tag_already_exists" },
        { status: "failed", reason: "name_already_exists" },
    ],
});
