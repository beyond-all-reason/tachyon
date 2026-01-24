import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "autohost",
    target: "server",
    description:
        "This event should be sent to the server on connection and whenever any of the status properties change.",
    event: {
        data: Type.Object(
            {
                maxBattles: Type.Integer({
                    minimum: 0,
                    description:
                        "The maxBattles might be reported lower (e.g. 0) then currentBattles. Example: autohost is shutting down and doesn't want to accept any new battles.",
                }),
                currentBattles: Type.Integer({ minimum: 0 }),
                availableEngines: Type.Array(Type.String(), {
                    description: "List of available engine versions on autohost",
                }),
            },
            {
                examples: [
                    {
                        maxBattles: 10,
                        currentBattles: 5,
                        availableEngines: ["2025.01.5"],
                    },
                ],
            }
        ),
    },
});
