import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "autohost",
    description:
        "Ask the autohost to install specified engine version.\n\nReturn success when version installed successfully. If the engine is already installed autohost returns success instantly. When new engine is installed autohost will also then send a `status` event with the new available engine versions.",
    request: {
        data: Type.Object(
            {
                version: Type.String({ description: "Version of the engine to install" }),
            },
            {
                examples: [
                    {
                        version: "2025.01.5",
                    },
                ],
            }
        ),
    },
    response: [
        {
            status: "success",
        },
        {
            status: "failed",
            reason: "not_found",
            description: "Engine version not found on the assets server",
        },
    ],
});
