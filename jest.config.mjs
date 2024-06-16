const jestConfig = {
    preset: "ts-jest",
    roots: ["test"],
    verbose: true,
    transform: {
        "^.+.spec.ts": [
            "ts-jest",
            {
                tsconfig: {
                    resolveJsonModule: true,
                    esModuleInterop: true,
                },
            },
        ],
    },
};

export default jestConfig;
