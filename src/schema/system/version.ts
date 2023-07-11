import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";

// eslint-disable-next-line no-restricted-imports
import packageJson from "../../../package.json";

export default defineEndpoint({
    description:
        "Sends the current version of the protocol to new Websocket clients as soon as they connect.",
    response: [
        {
            status: "success",
            data: Type.Object({
                tachyonVersion: Type.Literal(packageJson.version),
            }),
        },
    ],
});
