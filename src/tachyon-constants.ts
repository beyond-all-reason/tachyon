export const tachyonActors = ["server", "user", "autohost"] as const;
export type TachyonActor = (typeof tachyonActors)[number];
