import { Type } from "@sinclair/typebox";

import { Endpoint, schemaRef } from "../helpers";
import { privateUser } from "./types";

export const authEndpoints: Record<string, Endpoint> = {
    disconnect: {
        request: Type.Object({})
    }
};