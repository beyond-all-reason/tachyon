import Type from "typebox";

export const allyTeam = Type.Object(
    {
        teams: Type.Array(Type.Ref("team"), { minItems: 1 }),
        startBox: Type.Optional(Type.Ref("startBox")),
        allies: Type.Optional(
            Type.Array(Type.Integer(), {
                description: "0-based indexes into of the other allyteams to ally with",
            })
        ),
        customProperties: Type.Optional(Type.Ref("customStartScriptProperties")),
    },
    { $id: "allyTeam" }
);
