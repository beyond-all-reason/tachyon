export type UserClient = {
    userId: number;
    username: string;
    isBot: boolean;
    clanId: number | null;
    icons: Record<string, string>;
    roles: string[];
    battleStatus: BattleStatus | null;
};

export type BattleStatus = {
    lobbyId: number | null;
    inGame: boolean;
    away: boolean;
    ready: boolean;
    playerNumber: number | null;
    teamColour: string | null;
    isPlayer: boolean;
    bonus: number;
    sync: {
        engine: number;
        game: number;
        map: number;
    };
    partyId: string | null;
    clanTag: string | null;
    muted: boolean;
};

export type PrivateUserClient = UserClient & {
    email: string;
    friends: number[];
    friendRequests: number[];
    ignores: number[];
};

export enum LobbyStatus {
    UNSPECIFIED,
    UNLOCKED,
    FRIENDS,
    WHITELIST,
    LOCKED,
}

export type Rect = {
    x: number;
    y: number;
    width: number;
    height: number;
};

export type Lobby = {
    id: number;
    name: string;
    founderId: number;
    passworded: boolean;
    locked: boolean;
    engineName: string;
    engineVersion: string;
    playerIds: number[];
    spectatorIds: number;
    ip: string;
    settings: Record<string, string>;
    startAreas: Record<number, Rect>;
    mapName: string;
    mapHash: string;
    public: boolean;
    type: "normal" | "replay";
    natType: "none" | "holepunched" | "fixed";
    port: number;
};
