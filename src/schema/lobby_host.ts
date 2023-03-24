import { Type } from "@sinclair/typebox";

import { Endpoint, schemaRef } from "../helpers";
import { lobby } from "./types";

export const lobbyHostEndpoints: Record<string, Endpoint> = {
    create: {
        request: Type.Object({}),
        response: Type.Object({})
    },
    close: {
        request: Type.Object({}),
        response: Type.Object({})
    },
    join_request: {// Server messages first, how do we define request/response for this?
        request: Type.Object({}),
        response: Type.Object({})
    },

    // In lobby actions
    update_player_status: {
        request: Type.Object({}),
        response: Type.Object({})
    },
    add_bot: {
        request: Type.Object({}),
        response: Type.Object({})
    },
    update_bot: {
        request: Type.Object({}),
        response: Type.Object({})
    },
    remove_bot: {
        request: Type.Object({}),
        response: Type.Object({})
    },
    
    // Battle stuff
    start_battle: {
        request: Type.Object({}),
        response: Type.Object({})
    },
    end_battle: {
        request: Type.Object({}),
        response: Type.Object({})
    },
    
    // Server updates
    updated_status: {
        response: Type.Object({})
    }
};
