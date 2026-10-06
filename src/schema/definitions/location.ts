import Type from "typebox";

export const location = Type.Object(
    {
        region: Type.String({
            examples: ["europe-west", "northamerica-east", "australia-outback", "test"],
        }),
    },
    { $id: "location" }
);
