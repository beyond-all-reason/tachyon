import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers";

export default defineEndpoint({
    description: "Create a new lobby - intended for player clients to summon a dedicated host.",
    request: {
        data: Type.Object(
            {
                title: Type.String({ minLength: 2, maxLength: 30 }),
                private: Type.Boolean({ default: true }),
                region: Type.String(),
                maxPlayers: Type.Integer({ minimum: 0, default: 16 }),
            },
            {
                examples: [
                    {
                        title: "8v8 | All Welcome",
                        private: false,
                        region: "EU",
                        maxPlayers: 16,
                    },
                ],
            }
        ),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "no_hosts_available" },
        { status: "failed", reason: "invalid_region" },
    ],
});
