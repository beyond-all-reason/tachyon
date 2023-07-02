import { Type } from "@sinclair/typebox";

export const battleStatus = Type.Object({
    lobbyId: Type.Union([Type.Integer(), Type.Null()]),
    inGame: Type.Boolean(),
    away: Type.Boolean(),
    ready: Type.Boolean(),
    playerNumber: Type.Union([Type.Integer(), Type.Null()]),
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
    userId: Type.Integer(),
    username: Type.String(),
    isBot: Type.Boolean(),
    clanId: Type.Union([Type.Integer(), Type.Null()]),
    icons: Type.Record(Type.String(), Type.String()),
    roles: Type.Array(Type.String(), { examples: [["admin", "moderator", "mentor"]] }),
    battleStatus: Type.Union([battleStatus, Type.Null()]),
});

export const privateUserClient = Type.Composite([
    userClient,
    Type.Object({
        email: Type.String({ format: "email" }),
        friends: Type.Array(Type.Integer()),
        friendRequests: Type.Array(Type.Integer()),
        ignores: Type.Array(Type.Integer()),
    }),
]);

export const rect = Type.Object({
    x: Type.Number(),
    y: Type.Number(),
    width: Type.Number(),
    height: Type.Number(),
});

export const lobby = Type.Object({
    id: Type.Integer(),
    name: Type.String(),
    founderId: Type.Integer(),
    passworded: Type.Boolean(),
    locked: Type.Boolean(),
    engineName: Type.String(),
    engineVersion: Type.String(),
    playerIds: Type.Array(Type.Integer()),
    spectatorIds: Type.Integer(),
    ip: Type.String(),
    settings: Type.Record(Type.String(), Type.String()),
    startAreas: Type.Record(Type.Integer(), rect),
    mapName: Type.String(),
    mapHash: Type.String(),
    public: Type.Boolean(),
    type: Type.Union([Type.Literal("normal"), Type.Literal("replay")]),
    natType: Type.Union([Type.Literal("none"), Type.Literal("holepunched"), Type.Literal("fixed")]),
    port: Type.Integer(),
});
