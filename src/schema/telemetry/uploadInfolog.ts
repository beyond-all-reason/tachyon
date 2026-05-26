import Type from "typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Upload a gzip-compressed, base64-encoded log file.",
    request: {
        data: Type.Object({
            logType: Type.String({
                maxLength: 64,
                description: "Type/category of the infolog, e.g. 'crash', 'replay-error'.",
            }),
            anonHash: Type.String({
                description: "Unique install hash (used for both authed and anon users).",
            }),
            metadata: Type.Optional(
                Type.Object({}, { description: "Arbitrary metadata key-value pairs." })
            ),
            contents: Type.String({
                description: "Base64-encoded, gzip-compressed log contents.",
            }),
        }),
    },
    response: [
        {
            status: "success",
            data: Type.Object({
                infoLogId: Type.Integer(),
            }),
        },
        { status: "failed", reason: "payload_too_large" },
    ],
});
