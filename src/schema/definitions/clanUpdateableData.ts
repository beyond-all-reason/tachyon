import { Type } from "@sinclair/typebox";

export const clan = Type.Intersect(
    [
        Type.Ref("clanUpdateableBaseData"),
        Type.Object({
            description: Type.Optional(Type.String({ maxLength: 500 })),
        }),
    ],
    { $id: "clanUpdateableData" }
);
