import { build } from "tsup";

export async function generateCompiled() {
    await build({
        entry: {
            index: "./src/compiled.ts",
        },
        bundle: true,
        outDir: "dist",
        dts: true,
        format: ["esm"],
        silent: true,
    });
}
