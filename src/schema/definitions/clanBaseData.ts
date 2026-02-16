import Type from "typebox";

export const clanBaseData = Type.Intersect(
    [
        Type.Object({
            clanId: Type.Ref("clanId"),
        }),
        Type.Ref("clanUpdateableBaseData"),
    ],
    { $id: "clanBaseData" }
);
