import { Type } from "@sinclair/typebox";

export const timeMarker = Type.Integer({
    $id: "timeMarker",
    description: "an opaque value to represent a point in time",
    examples: [-576460745805023],
});
