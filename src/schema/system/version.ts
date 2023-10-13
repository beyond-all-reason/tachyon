import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";

// eslint-disable-next-line no-restricted-imports
import packageJson from "../../../package.json";

export default defineEndpoint({
    description: `Sends the current version of the protocol to new Websocket clients as soon as they connect.
        
        Clients should send the version they're using in the WS connection URL, e.g. ?tachyonVersion=1.1.2.`,
    requiresLogin: false,
    response: [
        {
            status: "success",
            data: Type.Object({
                tachyonVersion: Type.Literal(packageJson.version),
                versionParity: Type.Union([
                    Type.Literal("major_mismatch"),
                    Type.Literal("minor_mismatch"),
                    Type.Literal("patch_mismatch"),
                    Type.Literal("match"),
                    Type.Literal("unknown"),
                ]),
            }),
        },
    ],
});
