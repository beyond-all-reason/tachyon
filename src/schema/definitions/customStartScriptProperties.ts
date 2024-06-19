import { Type } from "@sinclair/typebox";

export const customStartScriptProperties = Type.Record(
    Type.String({ pattern: "^[a-zA-Z0-9_-]$" }),
    Type.String(),
    {
        description:
            "Additional custom properties to set in engine StartScript for this object, must not collide with existing properties",
        $id: "customStartScriptProperties",
    }
);
