import { Type } from "@sinclair/typebox";

export const clanBaseData = Type.Object(
    {
        name: Type.String({ maxLength: 30 }),
        tag: Type.String({ minLength: 3, maxLength: 6 }),
    },
    { $id: "clanUpdateableBaseData" }
);
