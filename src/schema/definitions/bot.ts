import { Type } from "@sinclair/typebox";

export const bot = Type.Object(
    {
        hostUserId: Type.String({ format: "uuid", description: "UserId of the player hosting this AI" }),
        name: Type.String(),
        aiShortName: Type.String(),
        aiVersion: Type.String(),
        customOptions: Type.Record(Type.String(), Type.Unknown()),
    },
    { $id: "bot" }
);
