import Type from "typebox";

export const allyTeamConfig = Type.Array(
    Type.Object(
        {
            maxTeams: Type.Integer({ minimum: 1 }),
            startBox: Type.Ref("startBox"),
            teams: Type.Array(
                Type.Object({
                    maxPlayers: Type.Integer({ minimum: 1 }),
                })
            ),
        },
        { description: "config for this ally team" }
    ),
    { description: "each object describes an ally team", $id: "allyTeamConfig" }
);
