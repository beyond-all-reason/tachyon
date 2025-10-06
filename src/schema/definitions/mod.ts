import { Type } from "@sinclair/typebox";

export const mod = Type.Object(
    {
        name: Type.String({
            description: "Human-readable name (e.g., 'Sphere Spawner')",
        }),
        archiveName: Type.String({
            description:
                "Archive filename from modinfo.lua (e.g., 'sphere-spawner.sdd'). Required for Spring script MUTATOR entries.",
        }),
        gitRef: Type.String({
            description:
                "Git commit hash or tag for precise version control. Used to verify exact version.",
        }),
        repository: Type.String({
            description:
                "GitHub repository URL (e.g., 'https://github.com/user/repo'). Used for downloading.",
        }),
        type: Type.Literal("github", {
            description: "Source type. Currently only GitHub is supported.",
        }),
    },
    {
        $id: "mod",
        description:
            "A mod/mutator that can be applied to a game. Order matters - mods are loaded in sequence and later mods can override earlier ones.",
    }
);
