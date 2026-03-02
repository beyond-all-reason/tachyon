import Type from "typebox";

export const clanUpdateableBaseData = Type.Object(
    {
        name: Type.String({ maxLength: 30 }),
        tag: Type.String({ minLength: 3, maxLength: 10 }),
    },
    { $id: "clanUpdateableBaseData" }
);
