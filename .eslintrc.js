module.exports = {
    root: true,
    env: {
        node: true,
    },
    ignorePatterns: ["dist", "build", "node_modules", "working-files", "**/*.js"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
    },
    plugins: ["@typescript-eslint", "unused-imports", "simple-import-sort"],
    rules: {
        "no-console": "off",
        "no-restricted-imports": [
            "error",
            {
                patterns: [".*"],
            },
        ],

        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/ban-ts-comment": "off",

        "unused-imports/no-unused-imports": "error",

        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
    },
};
