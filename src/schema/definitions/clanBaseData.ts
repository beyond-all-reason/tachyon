import { Type } from "@sinclair/typebox";

export const clanBaseData = Type.Union(
    [
        Type.Object({
            clanId: Type.Ref("clanId"),
            name: Type.String({ maxLength: 30 }),
            tag: Type.String({ minLength: 3, maxLength: 6 }),
        }),
        Type.Null(),
    ],
    { $id: "clanBaseData" }
);
