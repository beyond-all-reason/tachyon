import { Type } from "@sinclair/typebox";

export const historyMarker = Type.String({
    $id: "historyMarker",
    description: "an opaque value to allow history retrieval",
    examples: ["-576460745805023"],
});
