import { Type } from "@sinclair/typebox";

import { customStartScriptProperties } from "@/schema/definitions/customStartScriptProperties";
import { startBox } from "@/schema/definitions/startBox";
import { team } from "@/schema/definitions/team";

export const allyTeam = Type.Object(
    {
        teams: Type.Array(Type.Ref(team), { minItems: 1 }),
        startBox: Type.Optional(Type.Ref(startBox)),
        allies: Type.Optional(
            Type.Array(Type.Integer(), {
                description: "0-based indexes into of the other allyteams to ally with",
            })
        ),
        customProperties: Type.Optional(Type.Ref(customStartScriptProperties)),
    },
    { $id: "allyTeam" }
);
