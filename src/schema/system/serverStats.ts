import { defineEndpoint } from "@/helpers";
import { Type } from "@sinclair/typebox";

export default defineEndpoint({
    description: "Get server stats such as user count.",
    request: {},
    response: [
        {
            status: "success",
            data: Type.Object({
                userCount: Type.Integer(),
            }),
        },
    ],
});
