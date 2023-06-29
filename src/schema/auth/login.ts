import { Type } from "@sinclair/typebox";

import { defineRequest, defineResponse, EndpointSchema, failed, success } from "@/helpers";
import { privateUserClient } from "@/schema/types";

export default {
    request: defineRequest(
        Type.Object({
            token: Type.String(),
        })
    ),
    response: defineResponse([
        success(
            Type.Object({
                user: privateUserClient,
            })
        ),
        failed(["invalid_token", "expired_token", "banned"]),
    ]),
} satisfies EndpointSchema;
