import { Type } from "@sinclair/typebox";

import { Endpoint } from "../helpers";
import { privateUser } from "./types";

export const authEndpoints: Record<string, Endpoint> = {
    disconnect: {
        request: Type.Object({
            
        }),
        response: Type.Object({
            
        })
    }
};