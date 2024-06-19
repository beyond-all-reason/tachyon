import { Type } from "@sinclair/typebox";

export const unixTime = Type.Integer({
    $id: "unixTime",
    description: "Unix timestamp in microseconds",
    examples: [1705432698000000],
});
