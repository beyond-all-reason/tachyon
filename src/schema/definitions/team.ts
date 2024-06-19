import { Type } from "@sinclair/typebox";

import { bot } from "@/schema/definitions/bot";
import { customStartScriptProperties } from "@/schema/definitions/customStartScriptProperties";
import { player } from "@/schema/definitions/player";

export const team = Type.Object(
    {
        players: Type.Optional(Type.Array(Type.Ref(player))),
        bots: Type.Optional(Type.Array(Type.Ref(bot))),
        advantage: Type.Optional(Type.Number({ minimum: -1 })),
        incomeMultiplier: Type.Optional(Type.Number({ minimum: 0 })),
        faction: Type.Optional(Type.String()),
        color: Type.Optional(
            Type.Object({
                r: Type.Number({ minimum: 0, maximum: 1 }),
                g: Type.Number({ minimum: 0, maximum: 1 }),
                b: Type.Number({ minimum: 0, maximum: 1 }),
            })
        ),
        startPos: Type.Optional(
            Type.Object({
                x: Type.Integer(),
                y: Type.Integer(),
            })
        ),
        customProperties: Type.Optional(Type.Ref(customStartScriptProperties)),
    },
    { $id: "team" }
);
