export const tachyonActors = ["server", "user", "autohost"] as const;
export type TachyonActor = (typeof tachyonActors)[number];
export const tachyonMessageTypes = ["request", "response", "event"] as const;
export type TachyonMessageType = (typeof tachyonMessageTypes)[number];
