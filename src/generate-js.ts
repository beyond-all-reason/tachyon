import fs from "node:fs/promises";

import { build as tsupBuild } from "tsup";

import { generateValidators as generateJsValidators } from "@/generate-js-validators.js";
import { TachyonConfig } from "@/generate-json-schemas";
import { generateTSDefs } from "@/generate-ts-defs";

// eslint-disable-next-line no-restricted-imports
import packageJson from "../package.json";

async function generateTempIndex(tachyonConfig: TachyonConfig) {
    const meta = {
        version: packageJson.version,
        schema: tachyonConfig.schemaMeta,
    };

    const typeHelpers = (await fs.readFile("src/type-helpers.ts", "utf-8")).split(
        "//--DIST-START--\n"
    )[1];
    const indexContents = `
        export const tachyonMeta = ${JSON.stringify(meta, null, 4)} as const;
        import { TachyonCommand } from "./types.js";
        ${typeHelpers}`;
    await fs.writeFile("dist/index.ts", indexContents);
}

export async function generateJs(tachyonConfig: TachyonConfig) {
    await fs.mkdir("dist", { recursive: true });

    await generateJsValidators();
    process.stdout.write("Generating TS Defs...");
    await generateTSDefs();
    process.stdout.write("✔️\n");

    process.stdout.write("Build bundle...\n");
    await generateTempIndex(tachyonConfig);
    await tsupBuild({
        entry: {
            index: "dist/index.ts",
            types: "dist/types.ts",
        },
        bundle: true,
        outDir: "dist",
        dts: true,
        format: ["cjs", "esm"],
        silent: false,
    });
    await fs.rm("dist/index.ts", { force: true });
    await fs.rm("dist/types.ts", { force: true });
    process.stdout.write("✔️\n");
}
