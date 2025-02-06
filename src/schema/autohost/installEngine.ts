import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "autohost",
    description:
        "Ask the autohost to install specified engine version.\n\nReturn success instantly and autohost triggers the installation of the engine in background. It's fine to call this method repeatedly and autohost must deduplicate requests internally. When new engine is installed autohost send a `status` event with the new available engine versions.",
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
    ],
});
