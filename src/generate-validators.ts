import { build } from "tsup";
import fs from "fs";

export async function generateValidator() {
    await build({
        entry: ["./src/validator.ts"],
        bundle: true,
        outDir: "dist",
        dts: true,
    });

    await fs.promises.rename("./dist/validator.js", "./dist/index.js");

    const validatorDefs = await fs.promises.readFile("./dist/validator.d.ts", {
        encoding: "utf-8",
    });
    await fs.promises.appendFile("./dist/index.d.ts", validatorDefs);

    await fs.promises.rm("./dist/validator.d.ts");
}
