import { Type } from "@sinclair/typebox";

import { customStartScriptProperties } from "@/schema/definitions/customStartScriptProperties";

export const bot = Type.Object(
    {
        hostUserId: Type.String({
            format: "uuid",
            description: "UserId of the player hosting this AI",
        }),
        name: Type.Optional(Type.String()),
        aiShortName: Type.String({ description: "Short name of the AI library" }),
        aiVersion: Type.Optional(Type.String()),
        aiOptions: Type.Optional(
            Type.Record(Type.String(), Type.String(), { description: "AI-specific options" })
        ),
        customProperties: Type.Optional(Type.Ref(customStartScriptProperties)),
    },
    { $id: "bot" }
);
