import { TSchema } from "@sinclair/typebox";
import * as fs from "fs";

import { Services } from "./helpers";
import { accountEndpoints } from "./schema/account";
import { authEndpoints } from "./schema/auth";
import { privateUser, user, userIds } from "./schema/types";

const services: Services = {
    auth: authEndpoints,
    account: accountEndpoints
};

(async () => {
    const allSchemas: TSchema[] = [
        userIds,
        user,
        privateUser
    ];

    for (const serviceKey in services) {
        const endpoint = services[serviceKey];
        for (const endpointKey in endpoint) {
            const requestResponse = endpoint[endpointKey];
            if ("request" in requestResponse) {
                const request = requestResponse.request;
                request.$id = `${serviceKey}/${endpointKey}/request`;
                allSchemas.push(request);
            }
            if ("response" in requestResponse) {
                const response = requestResponse.response;
                response.$id = `${serviceKey}/${endpointKey}/response`;
                allSchemas.push(response);
            }
        }
    }

    await fs.promises.writeFile(`schema.json`, JSON.stringify(allSchemas, null, 4));
})();