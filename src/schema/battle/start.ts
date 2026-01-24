import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "server",
    target: "user",
    description:
        "When a user client receives this response it should launch the game (spring.exe) with the start script.",
    request: {
        data: Type.Ref("privateBattle"),
    },
    response: [
        {
            status: "success",
        },
    ],
});
