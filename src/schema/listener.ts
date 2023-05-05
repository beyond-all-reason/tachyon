import { Type } from "@sinclair/typebox";

import { ServiceSchema } from "../helpers";

export const listenerEndpoints = {
    /*
  Listeners allow clients to subscribe to certain update channels. When you login you will be subscribed to a user update channel for that user, meaning if a server change happens to your account you'd receive a message (even if you were the one that prompted the change). Some commands will allow you to manually subscribe/unsubscribe from various listeners. It is not expected you will need these as part of standard client usage but could be very useful for certain automation purposes.
  */
    subscribe: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    unsubscribe: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
    list_subscriptions: {
        request: Type.Object({}, { additionalProperties: true }),
        response: Type.Object({}, { additionalProperties: true }),
    },
} as const satisfies ServiceSchema;
