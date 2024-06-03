import { Type } from "@sinclair/typebox";

import { spectator } from "@/schema/definitions/spectator";

export const player = Type.Intersect(
    [
        Type.Ref(spectator),
        Type.Object({
            customOptions: Type.Optional(Type.Record(Type.String(), Type.String())),
        }),
    ],
    {
        $id: "player",
    }
);
