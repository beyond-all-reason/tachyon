import { generateCompiled } from "@/generate-compiled.js";
import { generateDocs } from "@/generate-docs.js";
import { generateJsonSchemas } from "@/generate-json-schemas.js";
import { generateMeta } from "@/generate-meta.js";
import { generateTSDefs } from "@/generate-ts-defs.js";
import { generateValidators } from "@/generate-validators.js";

(async () => {
    // process.stdout.write("Cleaning dist folder...");
    // await fs.promises.rm("./dist", { force: true, recursive: true });
    // process.stdout.write("✔️\n");

    process.stdout.write("Generating JSONSchemas...");
    const { individualSchemas, compiledSchema, ids } = await generateJsonSchemas();
    process.stdout.write("✔️\n");

    process.stdout.write("Generating Meta...");
    await generateMeta(ids);
    process.stdout.write("✔️\n");

    process.stdout.write("Generating Compiled Schemas...");
    await generateCompiled();
    process.stdout.write("✔️\n");

    process.stdout.write("Generating Docs...");
    await generateDocs(individualSchemas, compiledSchema);
    process.stdout.write("✔️\n");

    process.stdout.write("Generating TypeScript Definitions...");
    await generateTSDefs(compiledSchema);
    process.stdout.write("✔️\n");

    process.stdout.write("Generating Validators...");
    await generateValidators(compiledSchema);
    process.stdout.write("✔️\n");
})();
