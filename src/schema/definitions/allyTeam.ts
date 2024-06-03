import { Type } from "@sinclair/typebox";

import { startBox } from "@/schema/definitions/startBox";
import { team } from "@/schema/definitions/team";

export const allyTeam = Type.Object(
    {
        teams: Type.Array(Type.Ref(team)),
        startBox: Type.Ref(startBox),
        options: Type.Optional(Type.Record(Type.String(), Type.String())),
    },
    { $id: "allyTeam" }
);
