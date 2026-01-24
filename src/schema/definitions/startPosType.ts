import Type from "typebox";

export const startPosType = Type.Enum(["fixed", "random", "ingame", "beforegame"], {
    $id: "startPosType",
});
