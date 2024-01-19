import { Type } from "@sinclair/typebox";
import { Nullable } from "jaz-ts-utils";

export const unixTime = Nullable(
    Type.Integer({ description: "Unix time", examples: [1705432698, null] })
);

export const battleContender = Type.Object({
    playerId: Type.Integer(),
    teamId: Type.Integer(),
    color: Type.String(),
    bonus: Type.Number(),
    inGame: Type.Boolean(),
});

export const battlePlayer = Type.Intersect([
    battleContender,
    Type.Object({
        isSpectator: Type.Literal(false),
        isBot: Type.Literal(false),
        ready: Type.Boolean(),
        sync: Type.Object({
            engine: Type.Number(),
            game: Type.Number(),
            map: Type.Number(),
        }),
    }),
]);

export const battleSpectator = Type.Object({
    isSpectator: Type.Literal(true),
    isBot: Type.Literal(false),
});

export const bot = Type.Composite([
    battleContender,
    Type.Object({
        isSpectator: Type.Literal(false),
        isBot: Type.Literal(true),
        ownerId: Type.Integer(),
        aiShortName: Type.String(),
        name: Type.String(),
        aiOptions: Type.Record(Type.String(), Type.Unknown()),
        faction: Type.String(),
    }),
]);

export const battleStatus = Nullable(
    Type.Intersect([
        Type.Object({
            battleId: Type.Integer(),
        }),
        Type.Union([battlePlayer, battleSpectator]),
    ])
);

export const user = Type.Object({
    userId: Type.Integer(),
    displayName: Type.String(),
    avatarUrl: Type.String({ format: "uri" }),
    clanId: Nullable(Type.Integer()),
    partyId: Nullable(Type.Integer()),
    roles: Type.Array(Type.String()),
    countryCode: Type.Optional(Type.String()),
    battleStatus,
});

export const privateUser = Type.Composite([
    user,
    Type.Object({
        friendIds: Type.Array(Type.Integer()),
        outgoingFriendRequestIds: Type.Array(Type.Integer()),
        incomingFriendRequestIds: Type.Array(Type.Integer()),
        ignoreIds: Type.Array(Type.Integer()),
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

export const battle = Type.Object(
    {
        battleId: Type.Readonly(Type.Integer()),
        hostId: Type.Integer(),
        engine: Type.String(),
        game: Type.String(),
        map: Type.String(),
        startPosType: Type.Union([
            Type.Literal(0, { description: "Fixed" }),
            Type.Literal(1, { description: "Random" }),
            Type.Literal(2, { description: "Boxes" }),
        ]),
        startAreas: Type.Record(Type.Integer(), rect),
        startTime: unixTime,
        ip: Nullable(Type.String()),
        port: Nullable(Type.Integer()),
        scriptPassword: Nullable(Type.String()),
        modOptions: Type.Record(Type.String(), Type.Any()),
        bots: Type.Array(bot),
        users: Type.Array(user),
    },
    {
        examples: [
            {
                battleId: 27,
                hostId: 822,
                engine: "105.1.1-1821-gaca6f20 BAR105",
                game: "Beyond All Reason test-23561-0abff7c",
                map: "Red Comet Remake 1.8",
                startPosType: 2,
                startAreas: {
                    0: { x: 0, y: 0, width: 1, height: 0.3 },
                    1: { x: 0, y: 0.7, width: 1, height: 0.3 },
                },
                startTime: 1705432698,
                ip: "121.32.201.76",
                port: 41403,
                scriptPassword: "10sdfi90sid0sjkdf",
                modOptions: {
                    emprework: 0,
                },
                bots: [],
                users: [],
            },
        ],
    }
);

export const customBattle = Type.Intersect(
    [
        battle,
        Type.Object({
            title: Type.String(),
            locked: Type.Boolean(),
            passworded: Type.Boolean(),
            bossIds: Type.Array(Type.Integer()),
            joinQueueIds: Type.Array(Type.Integer()),
            limits: Type.Object({
                minTeamsize: Nullable(Type.Integer()),
                maxTeamsize: Nullable(Type.Integer()),
                minRating: Nullable(Type.Integer()),
                maxRating: Nullable(Type.Integer()),
            }),
        }),
    ],
    {
        examples: [
            {
                ...battle.examples[0],
                title: "8v8 | All Welcome",
                bossIds: [123, 456],
                locked: false,
                passworded: false,
                spectatorIds: [88],
                limits: {
                    minTeamsize: 3,
                    maxTeamsize: 3,
                    minRating: null,
                    maxRating: 25,
                },
            },
        ],
    }
);

export const autohostStatus = Type.Object({
    gameStartTime: unixTime,
});
