import { Type } from "@sinclair/typebox";

import { enableRefs, IntersectAllOf, schemaRef } from "../helpers";

export const userIds = Type.Array(Type.Integer({ minimum: 0 }), {
    ...(enableRefs ? { $id: "userIds"} : {})
});

export const user = Type.Object({
    id: Type.Integer({ minimum: 0, description: "Unique Identifier for this user", examples: [1234] }),
    name: Type.String({ minLength: 2, maxLength: 20, pattern: "^[A-Za-z0-9_]+$" }),
    is_bot: Type.Boolean({ default: false }),
    clan_id: Type.Integer({ minimum: 0 }),
    icons: Type.Record(Type.String(), Type.String()),
    roles: Type.Array(Type.String()),
    battle_status: Type.Union([
        Type.Object({
            in_game: Type.Boolean(),
            away: Type.Boolean(),
            ready: Type.Boolean(),
            player_number: Type.Union([Type.Integer(), Type.Null()]),
            team_colour: Type.Union([Type.String(), Type.Null()]),
            is_player: Type.Boolean(),
            bonus: Type.Number(),
            sync: Type.Record(Type.String(), Type.Number()),
            faction: Type.Union([Type.String(), Type.Null()]),
            lobby_id: Type.Union([Type.Integer(), Type.Null()]),
            party_id: Type.Union([Type.String(), Type.Null()]),
            clan_tag: Type.Union([Type.String(), Type.Null()]),
            muted: Type.Boolean()
        }),
        Type.Null()
    ], { default: null })
}, {
    ...(enableRefs ? { $id: "user"} : {})
});

export const privateUser = IntersectAllOf([
    schemaRef(user),
    Type.Object({
        permissions: Type.Array(Type.String()),
        friends: schemaRef(userIds),
        friend_requests: schemaRef(userIds),
        ignores: schemaRef(userIds)
    })
], {
    ...(enableRefs ? { $id: "privateUser"} : {})
});

export enum LobbyStatus {
    UNSPECIFIED,
    UNLOCKED,
    FRIENDS,
    WHITELIST,
    LOCKED,
}

export const rect = Type.Object({
    x: Type.Number(),
    y: Type.Number(),
    w: Type.Number(),
    h: Type.Number(),
}, {
    ...(enableRefs ? { $id: "rect"} : {})
});

export const startArea = Type.Union([
    schemaRef(rect)
], {
    ...(enableRefs ? { $id: "startArea"} : {})
});

export const lobby = Type.Object({
    id: Type.Integer(),
    name: Type.String(),
    founder_id: Type.Number(),
    passworded: Type.Boolean(),
    locked: Type.Boolean(),
    engine_name: Type.String(),
    engine_version: Type.String(),
    players: schemaRef(userIds),
    spectators: schemaRef(userIds),
    ip: Type.String(),
    settings: Type.Record(Type.String(), Type.String()),
    start_areas: Type.Record(Type.Integer(), schemaRef(startArea)),
    map_name: Type.String(),
    map_hash: Type.String(),
    public: Type.Boolean()
}, {
    ...(enableRefs ? { $id: "lobby"} : {})
});