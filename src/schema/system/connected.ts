import { defineEndpoint } from "@/helpers";
import { Type } from "@sinclair/typebox";

export default defineEndpoint({
    description: "Sent immediately by the server on connection.",
    response: [
        {
            status: "success",
            data: Type.Object({
                accountId: Type.Integer(),
                displayName: Type.String(),
                avatarUrl: Type.String(),
                countryCode: Type.Optional(Type.String()),
            }),
        },
    ],
});
