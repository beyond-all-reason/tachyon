import Type from "typebox";

export const privateBattle = Type.Object(
    {
        battleId: Type.Ref("battleId"),
        username: Type.String(),
        password: Type.String(),
        ips: Type.Array(
            Type.Union([Type.String({ format: "ipv4" }), Type.String({ format: "ipv6" })])
        ),
        port: Type.Integer({ minimum: 1024, maximum: 65535 }),
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
