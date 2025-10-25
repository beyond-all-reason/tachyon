import { Type } from "@sinclair/typebox";

export const memberSyncStatus = Type.Object(
    {
        map: Type.Boolean({
            description: "True if the member has the required map",
        }),
        engine: Type.Boolean({
            description: "True if the member has the required engine version",
        }),
        game: Type.Boolean({
            description: "True if the member has the required game version",
        }),
        mods: Type.Array(Type.String(), {
            description: "Array of gitRefs for mods the member has downloaded",
        }),
    },
    {
        $id: "memberSyncStatus",
        description: "Tracks which resources a lobby member has downloaded and is ready to use.",
    }
);
