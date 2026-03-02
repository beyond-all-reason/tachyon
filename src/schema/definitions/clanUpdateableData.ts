import Type from "typebox";

export const clanUpdateableData = Type.Intersect(
    [
        Type.Ref("clanUpdateableBaseData"),
        Type.Object({
            description: Type.Optional(Type.String({ maxLength: 500 })),
        }),
    ],
    { $id: "clanUpdateableData" }
);
