import Type from "typebox";

export const privateBattle = Type.Object(
    {
        username: Type.String(),
        password: Type.String(),
        ip: Type.String(),
        port: Type.Number(),
        engine: Type.Object({
            version: Type.String(),
        }),
        game: Type.Object({
            springName: Type.String(),
        }),
        map: Type.Object({
            springName: Type.String(),
        }),
    },
    {
        $id: "privateBattle",
        description:
            "Battle informations including secrets to pass to spring for joining the game server. Don't expose secrets to other players.",
    }
);
