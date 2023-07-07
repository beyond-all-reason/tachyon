import { Type } from "@sinclair/typebox";

import { Nullable } from "@/helpers";

export const username = Type.String({
    minLength: 3,
    maxLength: 20,
    pattern: "^[A-Za-z0-9_-]+$",
    examples: ["Bob"],
});

export const email = Type.String({
    format: "email",
    examples: ["bob@test.com"],
});

export const battleStatus = Type.Object({
    lobbyId: Nullable(Type.Integer()),
    inGame: Type.Boolean(),
    away: Type.Boolean(),
    ready: Type.Boolean(),
    playerNumber: Nullable(Type.Integer()),
    teamColour: Nullable(Type.String()),
    isPlayer: Type.Boolean(),
    bonus: Type.Number(),
    sync: Type.Object({
        engine: Type.Number(),
        game: Type.Number(),
        map: Type.Number(),
    }),
    partyId: Nullable(Type.Integer()),
    muted: Type.Boolean(),
});

export const userClient = Type.Object({
    userId: Type.Integer(),
    username: Type.String(),
    isBot: Type.Boolean(),
    clanId: Nullable(Type.Integer()),
    icons: Type.Record(Type.String(), Type.String()),
    roles: Type.Array(Type.String(), { examples: [["admin", "moderator", "mentor"]] }),
    battleStatus: Nullable(battleStatus),
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

export const rect = Type.Object(
    {
        x: Type.Number(),
        y: Type.Number(),
        width: Type.Number(),
        height: Type.Number(),
    },
    {
        examples: [
            {
                x: 0,
                y: 0,
                width: 1,
                height: 0.3,
            },
        ],
    }
);

export const lobby = Type.Object(
    {
        id: Type.Integer(),
        name: Type.String(),
        founderId: Type.Integer(),
        private: Type.Boolean({ default: false }),
        replay: Type.Boolean({ default: false }),
        playerIds: Type.Array(Type.Integer()),
        spectatorIds: Type.Array(Type.Integer()),
        engine: Type.String(),
        game: Type.String(),
        map: Type.String(),
        startAreas: Type.Record(Type.Integer(), rect, {
            default: {
                0: { x: 0, y: 0, width: 1, height: 0.3 },
                1: { x: 0, y: 0.7, width: 1, height: 0.3 },
            },
        }),
        minTeamsize: Nullable(Type.Integer()),
        maxTeamsize: Nullable(Type.Integer()),
        minRating: Nullable(Type.Integer()),
        maxRating: Nullable(Type.Integer()),
    },
    {
        examples: [
            {
                id: 27,
                name: "8v8 | All Welcome",
                founderId: 822,
                private: false,
                replay: false,
                playerIds: [567, 232, 88, 119],
                spectatorIds: [88],
                engine: "105.1.1-1821-gaca6f20 BAR105",
                game: "Beyond All Reason test-23561-0abff7c",
                map: "Red Comet Remake 1.8",
                startAreas: {
                    0: { x: 0, y: 0, width: 1, height: 0.3 },
                    1: { x: 0, y: 0.7, width: 1, height: 0.3 },
                },
                minTeamsize: 3,
                maxTeamsize: 3,
                minRating: null,
                maxRating: 25,
            },
        ],
    }
);
