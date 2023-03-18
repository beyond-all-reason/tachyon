import { Type } from "@sinclair/typebox";

import { Endpoint } from "../helpers";
import { privateUser } from "./types";

export const accountEndpoints: Record<string, Endpoint> = {
    who_am_i: {
        request: Type.Object({}),
        response: Type.Ref(privateUser)
    }
};

