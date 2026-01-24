// @ts-check
import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

export default defineConfig(
    {
        ignores: ["dist/**"],
    },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    prettier,
    {
        plugins: {
            "unused-imports": unusedImports,
            "simple-import-sort": simpleImportSort,
        },
        rules: {
            "no-restricted-imports": [
                "error",
                {
                    patterns: [".*"],
                },
            ],
            "unused-imports/no-unused-imports": "error",
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
        },
    }
);
