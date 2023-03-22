import { TSchema, Type } from "@sinclair/typebox";
import * as fs from "fs";

import { Service } from "./helpers";
import { accountEndpoints } from "./schema/account";
import { authEndpoints } from "./schema/auth";
import { privateUser,user, userIds } from "./schema/types";

export const allSchemas = Type.Object(endpointsToSchema({
    account: accountEndpoints,
    auth: authEndpoints
}), {
    $id: "tachyon",
    $defs: {
        userIds,
        user,
        privateUser
    }
});

function endpointsToSchema<T extends Record<string, Service>>(services: T) {
    const serviceSchema: any = services;
    for (const serviceId in services) {
        const service = services[serviceId];
        for (const endpointId in service) {
            const endpoint = service[endpointId];
            for (const endpointTypeId in endpoint) {
                const endpointType = endpoint[endpointTypeId] as TSchema;
                (endpoint[endpointTypeId] as TSchema) = Type.Object({
                    cmd: Type.Literal(`${serviceId}/${endpointId}/${endpointTypeId}`),
                    data: endpointType
                }, { $id: `${serviceId}.${endpointId}.${endpointTypeId}` });
            }
            serviceSchema[serviceId][endpointId] = Type.Object(endpoint, { $id: `${serviceId}.${endpointId}` });
        }
        serviceSchema[serviceId] = Type.Object(service as any, { $id: `${serviceId}` });
    }
    return serviceSchema;
}

fs.writeFileSync("schema.json", JSON.stringify(allSchemas, null, 4));