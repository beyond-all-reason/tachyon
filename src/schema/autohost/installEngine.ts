import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "autohost",
    description: "Ask the autohost to install specified engine version.",
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
