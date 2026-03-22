import Type from "typebox";

export const voteOutcomes = Type.Enum(["passed", "failed", "cancelled", "timeout"], {
    $id: "voteOutcomes",
});
