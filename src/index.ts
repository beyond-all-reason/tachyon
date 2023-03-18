import * as fs from "fs";

import { Schema } from "./helpers";
import { accountEndpoints } from "./schema/account";
import { authEndpoints } from "./schema/auth";
import { privateUser, user, userIds } from "./schema/types";

const schema: Schema = {
    types: {
        userIds,
        user,
        privateUser
    },
    endpoints: {
        auth: authEndpoints,
        account: accountEndpoints
    }
};

(async () => {
    await fs.promises.writeFile("schema.json", JSON.stringify(schema, null, 4));
})();