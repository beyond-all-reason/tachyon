import { Static, TSchema, Type } from "@sinclair/typebox";
import * as fs from "fs";

import { enableRefs, endpointsToSchema } from "./helpers";
import { accountEndpoints } from "./schema/account";
import { authEndpoints } from "./schema/auth";
import { clanEndpoints } from "./schema/clan";
import { communicationEndpoints } from "./schema/communication";
import { configEndpoints } from "./schema/config";
import { listenerEndpoints } from "./schema/listener";
import { lobbyEndpoints } from "./schema/lobby";
import { lobbyChatEndpoints } from "./schema/lobby_chat";
import { lobbyHostEndpoints } from "./schema/lobby_host";
import { matchmakingEndpoints } from "./schema/matchmaking";
import { moderationEndpoints } from "./schema/moderation";
import { newsEndpoints } from "./schema/news";
import { partyEndpoints } from "./schema/party";
import { systemEndpoints } from "./schema/system";
import { telemetryEndpoints } from "./schema/telemetry";
import { privateUserClient, userClient, userClientIds } from "./schema/types";

export type Services = typeof allSchemas;
export type Service<S extends keyof Services> = Services[S];
export type Endpoint<S extends keyof Services, E extends keyof Service<S>> = Service<S>[E];
export type RequestEndpointKeys<S extends keyof Services> = { [K in keyof Service<S>]: "request" extends keyof Service<S>[K] ? K : never }[keyof Service<S>];
export type ResponseEndpointKeys<S extends keyof Services> = { [K in keyof Service<S>]: "response" extends keyof Service<S>[K] ? K : never }[keyof Service<S>];
export type RequestData<S extends keyof Services, E extends RequestEndpointKeys<S>> = Endpoint<S, E> extends { request: infer R } ? (R extends TSchema ? Static<R> : never) : never;
export type ResponseData<S extends keyof Services, E extends ResponseEndpointKeys<S>> = Endpoint<S, E> extends { response: infer R } ? (R extends TSchema ? Static<R> : never) : never;

export const allSchemas = {
    account: accountEndpoints,
    auth: authEndpoints,
    clan: clanEndpoints,
    communication: communicationEndpoints,
    config: configEndpoints,
    listener: listenerEndpoints,
    lobby_chat: lobbyChatEndpoints,
    lobby_host: lobbyHostEndpoints,
    lobby: lobbyEndpoints,
    matchmaking: matchmakingEndpoints,
    moderation: moderationEndpoints,
    news: newsEndpoints,
    party: partyEndpoints,
    system: systemEndpoints,
    telemetry: telemetryEndpoints,
    unauth: unauthEndpoints,
};

const outputSchema = Type.Object(endpointsToSchema(allSchemas), {
    $id: "tachyon",
});

if (enableRefs) {
    outputSchema.$defs = {
        userClientIds,
        userClient,
        privateUserClient,
    };
}

fs.writeFileSync("schema.json", JSON.stringify(outputSchema, null, 4));
