import { Type } from "@sinclair/typebox";

import { IntersectAllOf } from "../helpers";

export const userIds = Type.Array(Type.Integer({ minimum: 0 }));

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
            player_number: Type.Integer(),
            team_colour: Type.String(),
            is_player: Type.Boolean(),
            bonus: Type.Number(),
            sync: Type.Record(Type.String(), Type.Number()),
            faction: Type.String(),
            lobby_id: Type.Integer(),
            party_id: Type.String(),
            clan_tag: Type.String(),
            muted: Type.Boolean()
        }),
        Type.Null()
    ], { default: null })
});

export const privateUser = IntersectAllOf([
    user,
    Type.Object({
        permissions: Type.Array(Type.String()),
        friends: userIds,
        friend_requests: userIds,
        ignores: userIds
    })
]);

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
}, { $id: "rect" });

export const startArea = Type.Union([
    rect
], { $id: "startArea" });

export const lobby = Type.Object({
    id: Type.Integer(),
    name: Type.String(),
    founder_id: Type.Number(),
    passworded: Type.Boolean(),
    locked: Type.Boolean(),
    engine_name: Type.String(),
    engine_version: Type.String(),
    
    players: userIds,
    spectators: userIds,

    ip: Type.String(),
    settings: Type.Record(Type.String(), Type.String()),
    start_areas: Type.Record(Type.Integer(), startArea),
    map_name: Type.String(),
    map_hash: Type.String(),
    public: Type.Boolean()
}, { "$id": "lobby" });