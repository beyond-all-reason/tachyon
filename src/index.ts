import { TSchema, Type } from "@sinclair/typebox";
import * as fs from "fs";

import { objectMap, Services } from "./helpers";
import { accountEndpoints } from "./schema/account";
import { authEndpoints } from "./schema/auth";
import { privateUser, user, userIds } from "./schema/types";

const defs = {
    userIds,
    user,
    privateUser
};

const services: Services = {
    auth: authEndpoints,
    account: accountEndpoints
};

(async () => {
    const allSchemas: TSchema[] = [];

    await fs.promises.mkdir("schema", { recursive: true });
    await fs.promises.writeFile("schema/defs.json", JSON.stringify(Type.Object(defs), null, 4));

    for (const serviceKey in services) {
        const endpoint = services[serviceKey];
        for (const endpointKey in endpoint) {
            const requestResponse = endpoint[endpointKey];
            if ("request" in requestResponse) {
                const request = requestResponse.request;
                request.$id = `${serviceKey}/${endpointKey}/request`;
                allSchemas.push(request);
                await fs.promises.mkdir(`schema/${serviceKey}/${endpointKey}`, { recursive: true });
                await fs.promises.writeFile(`schema/${serviceKey}/${endpointKey}/request.json`, JSON.stringify(request, null, 4));
            }
            if ("response" in requestResponse) {
                const response = requestResponse.response;
                response.$id = `${serviceKey}/${endpointKey}/response`;
                allSchemas.push(response);
                await fs.promises.mkdir(`schema/${serviceKey}/${endpointKey}`, { recursive: true });
                await fs.promises.writeFile(`schema/${serviceKey}/${endpointKey}/response.json`, JSON.stringify(response, null, 4));
            }
        }
    }
    
    const singleFile = {
        ...defs,
        services
    };

    const singleFile2 = Type.Object({
        "$defs": Type.Object(defs),
        services: Type.Object(objectMap(services, val => Type.Object(objectMap(val, val2 => Type.Object(val2)))))
    })

    await fs.promises.writeFile(`schema/full_1.json`, JSON.stringify(singleFile, null, 4));
    await fs.promises.writeFile(`schema/full_2.json`, JSON.stringify(singleFile2, null, 4));
})();