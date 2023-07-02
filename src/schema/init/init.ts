import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    response: [
        {
            status: "success",
            data: Type.Object({
                tachyonVersion: Type.String({ examples: ["1.2.3"] }),
            }),
        },
    ],
});
