import { Type } from "@sinclair/typebox";

import { Endpoint, schemaRef } from "../helpers";
import { lobby } from "./types";

export const accountEndpoints: Record<string, Endpoint> = {
    list_lobbies: {
        request: Type.Object({}),
        response: Type.Array(schemaRef(lobby))
    }
};
