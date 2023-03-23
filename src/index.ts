import { Type } from "@sinclair/typebox";
import * as fs from "fs";

import { enableRefs, endpointsToSchema } from "./helpers";
import { accountEndpoints } from "./schema/account";
import { authEndpoints } from "./schema/auth";
import { privateUser,user, userIds } from "./schema/types";

export const allSchemas = Type.Object(endpointsToSchema({
    account: accountEndpoints,
    auth: authEndpoints
}), {
    $id: "tachyon",
});

if (enableRefs) {
    allSchemas.$defs = {
        userIds,
        user,
        privateUser
    };
}

fs.writeFileSync("schema.json", JSON.stringify(allSchemas, null, 4));