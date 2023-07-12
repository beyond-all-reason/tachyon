import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";
import { username } from "@/schema/types";

export default defineEndpoint({
    description: "Change username for the current user.",
    request: {
        data: Type.Object({
            newUsername: username,
        }),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "username_taken" },
        { status: "failed", reason: "username_profanity" },
    ],
});
