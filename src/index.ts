import { Type } from "@sinclair/typebox";
import * as fs from "fs";

import { enableRefs, endpointsToSchema } from "./helpers";
import { accountEndpoints } from "./schema/account";
import { authEndpoints } from "./schema/auth";
import { privateUserClient, userClient, userClientIds } from "./schema/types";

export const allSchemas = Type.Object(
    endpointsToSchema({
        account: accountEndpoints,
        auth: authEndpoints,
    }),
    {
        $id: "tachyon",
    }
);

if (enableRefs) {
    allSchemas.$defs = {
        userClientIds,
        userClient,
        privateUserClient,
    };
}

fs.writeFileSync("schema.json", JSON.stringify(allSchemas, null, 4));
