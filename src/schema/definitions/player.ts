import { Type } from "@sinclair/typebox";

export const player = Type.Object(
    {
        userId: Type.Ref("userId"),
        name: Type.String({ description: "Name of the player, must be unique just like userId" }),
        password: Type.String(),
        rank: Type.Optional(Type.Integer()),
        countryCode: Type.Optional(Type.String()),
        customProperties: Type.Optional(Type.Ref("customStartScriptProperties")),
    },
    { $id: "player" }
);
