import { Type } from "@sinclair/typebox";

export const battleStatus = Type.Object({
    lobbyId: Type.Union([Type.Number(), Type.Null()]),
    inGame: Type.Boolean(),
    away: Type.Boolean(),
    ready: Type.Boolean(),
    playerNumber: Type.Union([Type.Number(), Type.Null()]),
    teamColour: Type.Union([Type.String(), Type.Null()]),
    isPlayer: Type.Boolean(),
    bonus: Type.Number(),
    sync: Type.Object({
        engine: Type.Number(),
        game: Type.Number(),
        map: Type.Number(),
    }),
    partyId: Type.Union([Type.String(), Type.Null()]),
    clanTag: Type.Union([Type.String(), Type.Null()]),
    muted: Type.Boolean(),
});

export const userClient = Type.Object({
    userId: Type.Number(),
    username: Type.String(),
    isBot: Type.Boolean(),
    clanId: Type.Union([Type.Number(), Type.Null()]),
    icons: Type.Record(Type.String(), Type.String()),
    roles: Type.Array(Type.String()),
    battleStatus: Type.Union([battleStatus, Type.Null()]),
});

export const privateUserClient = Type.Intersect([
    userClient,
    Type.Object({
        email: Type.String(),
        friends: Type.Array(Type.Number()),
        friendRequests: Type.Array(Type.Number()),
        ignores: Type.Array(Type.Number()),
    }),
]);

export const rect = Type.Object({
    x: Type.Number(),
    y: Type.Number(),
    width: Type.Number(),
    height: Type.Number(),
});

export const lobby = Type.Object({
    id: Type.Number(),
    name: Type.String(),
    founderId: Type.Number(),
    passworded: Type.Boolean(),
    locked: Type.Boolean(),
    engineName: Type.String(),
    engineVersion: Type.String(),
    playerIds: Type.Array(Type.Number()),
    spectatorIds: Type.Number(),
    ip: Type.String(),
    settings: Type.Record(Type.String(), Type.String()),
    startAreas: Type.Record(Type.Number(), rect),
    mapName: Type.String(),
    mapHash: Type.String(),
    public: Type.Boolean(),
    type: Type.Union([Type.Literal("normal"), Type.Literal("replay")]),
    natType: Type.Union([Type.Literal("none"), Type.Literal("holepunched"), Type.Literal("fixed")]),
    port: Type.Number(),
});
