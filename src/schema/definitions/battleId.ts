import Type from "typebox";

export const battleId = Type.String({
    $id: "battleId",
    format: "uuid",
    examples: ["75bfc493-2b9d-495d-a453-06722fdca2ea"],
});
