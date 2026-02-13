import Type from "typebox";

export const clanBaseData = Type.Intersect(
    [Type.Ref("clanId"), Type.Ref("clanUpdateableBaseData")],
    { $id: "clanBaseData" }
);
