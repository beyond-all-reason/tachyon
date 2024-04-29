module.exports = {
    ...require("jaz-ts-utils/prettier.config.js"),
    overrides: [
        {
            files: "**/*.{ts,vue,js}",
            options: {
                printWidth: 160,
            },
        },
    ],
};
